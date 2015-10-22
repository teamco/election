(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/accounts_ui.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (!Accounts.ui) {                                                    // 1
    Accounts.ui = {};                                                  // 2
}                                                                      //
                                                                       //
if (!Accounts.ui._options) {                                           // 5
    Accounts.ui._options = {                                           // 6
        extraSignupFields: [],                                         // 7
        requestPermissions: {},                                        // 8
        requestOfflineToken: {},                                       // 9
        forceApprovalPrompt: {},                                       // 10
        forceEmailLowercase: false,                                    // 11
        forceUsernameLowercase: false,                                 // 12
        forcePasswordLowercase: false                                  // 13
    };                                                                 //
}                                                                      //
                                                                       //
Accounts.ui.navigate = function (route, hash) {                        // 17
    // if router is iron-router                                        //
    if (window.Router && _.isFunction(Router.go)) {                    // 19
        Router.go(route, hash);                                        // 20
    }                                                                  //
};                                                                     //
                                                                       //
Accounts.ui.config = function (options) {                              // 24
    // validate options keys                                           //
    var VALID_KEYS = ['passwordSignupFields', 'extraSignupFields', 'forceEmailLowercase', 'forceUsernameLowercase', 'forcePasswordLowercase', 'requestPermissions', 'requestOfflineToken', 'forceApprovalPrompt'];
                                                                       //
    _.each(_.keys(options), function (key) {                           // 29
        if (!_.contains(VALID_KEYS, key)) {                            // 30
            throw new Error("Accounts.ui.config: Invalid key: " + key);
        }                                                              //
    });                                                                //
                                                                       //
    options.extraSignupFields = options.extraSignupFields || [];       // 35
                                                                       //
    // deal with `passwordSignupFields`                                //
    if (options.passwordSignupFields) {                                // 38
        if (_.contains(["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY", "EMAIL_ONLY"], options.passwordSignupFields)) {
            if (Accounts.ui._options.passwordSignupFields) {           // 46
                throw new Error("Accounts.ui.config: Can't set `passwordSignupFields` more than once");
            } else {                                                   //
                Accounts.ui._options.passwordSignupFields = options.passwordSignupFields;
            }                                                          //
        } else {                                                       //
            throw new Error("Accounts.ui.config: Invalid option for `passwordSignupFields`: " + options.passwordSignupFields);
        }                                                              //
    }                                                                  //
                                                                       //
    Accounts.ui._options.forceEmailLowercase = options.forceEmailLowercase;
    Accounts.ui._options.forceUsernameLowercase = options.forceUsernameLowercase;
    Accounts.ui._options.forcePasswordLowercase = options.forcePasswordLowercase;
                                                                       //
    // deal with `requestPermissions`                                  //
    if (options.requestPermissions) {                                  // 61
        _.each(options.requestPermissions, function (scope, service) {
            if (Accounts.ui._options.requestPermissions[service]) {    // 63
                throw new Error("Accounts.ui.config: Can't set `requestPermissions` more than once for " + service);
            } else if (!(scope instanceof Array)) {                    //
                throw new Error("Accounts.ui.config: Value for `requestPermissions` must be an array");
            } else {                                                   //
                Accounts.ui._options.requestPermissions[service] = scope;
            }                                                          //
        });                                                            //
    }                                                                  //
    if (typeof options.extraSignupFields !== 'object' || !options.extraSignupFields instanceof Array) {
        throw new Error("Accounts.ui.config: `extraSignupFields` must be an array.");
    } else {                                                           //
        if (options.extraSignupFields) {                               // 75
            _.each(options.extraSignupFields, function (field, index) {
                if (!field.fieldName || !field.fieldLabel) {           // 77
                    throw new Error("Accounts.ui.config: `extraSignupFields` objects must have `fieldName` and `fieldLabel` attributes.");
                }                                                      //
                if (typeof field.visible === 'undefined') {            // 80
                    field.visible = true;                              // 81
                }                                                      //
                Accounts.ui._options.extraSignupFields[index] = field;
            });                                                        //
        }                                                              //
    }                                                                  //
                                                                       //
    // deal with `requestOfflineToken`                                 //
    if (options.requestOfflineToken) {                                 // 89
        _.each(options.requestOfflineToken, function (value, service) {
            if (service !== 'google') {                                // 91
                throw new Error("Accounts.ui.config: `requestOfflineToken` only supported for Google login at the moment.");
            }                                                          //
            if (Accounts.ui._options.requestOfflineToken[service]) {   // 94
                throw new Error("Accounts.ui.config: Can't set `requestOfflineToken` more than once for " + service);
            } else {                                                   //
                Accounts.ui._options.requestOfflineToken[service] = value;
            }                                                          //
        });                                                            //
    }                                                                  //
                                                                       //
    // deal with `forceApprovalPrompt`                                 //
    if (options.forceApprovalPrompt) {                                 // 103
        _.each(options.forceApprovalPrompt, function (value, service) {
            if (service !== 'google') {                                // 105
                throw new Error("Accounts.ui.config: `forceApprovalPrompt` only supported for Google login at the moment.");
            }                                                          //
            if (Accounts.ui._options.forceApprovalPrompt[service]) {   // 108
                throw new Error("Accounts.ui.config: Can't set `forceApprovalPrompt` more than once for " + service);
            } else {                                                   //
                Accounts.ui._options.forceApprovalPrompt[service] = value;
            }                                                          //
        });                                                            //
    }                                                                  //
};                                                                     //
                                                                       //
Accounts.ui._passwordSignupFields = function () {                      // 117
    return Accounts.ui._options.passwordSignupFields || "EMAIL_ONLY";  // 118
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=accounts_ui.js.map
