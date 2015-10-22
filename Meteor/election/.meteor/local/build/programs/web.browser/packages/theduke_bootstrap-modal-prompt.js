//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var BootstrapModalPrompt;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/theduke_bootstrap-modal-prompt/packages/theduke_bootstrap-modal-prompt.js                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
(function () {                                                                                                  // 1
                                                                                                                // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                       //     // 4
// packages/theduke:bootstrap-modal-prompt/prompt.js                                                     //     // 5
//                                                                                                       //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                         //     // 8
BootstrapModalPrompt = {                                                                                 // 1   // 9
                                                                                                         // 2   // 10
  /*                                                                                                     // 3   // 11
   * Expected format of options:                                                                         // 4   // 12
   * {                                                                                                   // 5   // 13
   *   title: 'Modal Title',                                                                             // 6   // 14
   *   content: 'Text content for modal',                                                                // 7   // 15
   *   template: 'templateWithContentName',                                                              // 8   // 16
   *   templateData: {},                                                                                 // 9   // 17
   *   btnDismissText: 'Close',                                                                          // 10  // 18
   *   btnOkText: 'OK',                                                                                  // 11  // 19
   *   onShown: function() {} // callback function.                                                      // 12  // 20
   * }                                                                                                   // 13  // 21
   */                                                                                                    // 14  // 22
  prompt: function(options, callback) {                                                                  // 15  // 23
    options = _.extend({                                                                                 // 16  // 24
      title: 'Confirmation',                                                                             // 17  // 25
      content: '',                                                                                       // 18  // 26
      template: null,                                                                                    // 19  // 27
      templateData: {},                                                                                  // 20  // 28
                                                                                                         // 21  // 29
      formSchema: null,                                                                                  // 22  // 30
                                                                                                         // 23  // 31
      btnDismissText: 'Close',                                                                           // 24  // 32
      btnOkText: 'OK',                                                                                   // 25  // 33
                                                                                                         // 26  // 34
      // Callback called before the modal is shown.                                                      // 27  // 35
      // Arguments are the passed initial options, and the modal DOM node.                               // 28  // 36
      beforeShow: function(options, node) {                                                              // 29  // 37
                                                                                                         // 30  // 38
      },                                                                                                 // 31  // 39
      // Called after the modal is shown and all transitions have been completed.                        // 32  // 40
      // Arguments are the passed initial options, and the modal DOM node.                               // 33  // 41
      afterShow: function(options, node) {                                                               // 34  // 42
                                                                                                         // 35  // 43
      },                                                                                                 // 36  // 44
                                                                                                         // 37  // 45
      // Callback called before the modal is hidden.                                                     // 38  // 46
      // Arguments are the passed initial options, and the modal DOM node.                               // 39  // 47
      beforeHide: function(options, node) {                                                              // 40  // 48
                                                                                                         // 41  // 49
      },                                                                                                 // 42  // 50
                                                                                                         // 43  // 51
      // Callback called after the modal has been hidden and all transitions have completed.             // 44  // 52
      // Arguments are the passed initial options, and the modal DOM node.                               // 45  // 53
      afterHide: function(options, node) {                                                               // 46  // 54
                                                                                                         // 47  // 55
      },                                                                                                 // 48  // 56
                                                                                                         // 49  // 57
      // Called when the users clicks on the confirm button.                                             // 50  // 58
      // If the function returns false, the confirm will be ABORTED.                                     // 51  // 59
      // Otherwise the modal will be closed and the regular callback is called with the result.          // 52  // 60
      // Arguments are the passed initial options, and the modal DOM node.                               // 53  // 61
      onConfirm: function(options, node) {                                                               // 54  // 62
        // return false; // Aborts closing of modal!                                                     // 55  // 63
      }                                                                                                  // 56  // 64
    }, options);                                                                                         // 57  // 65
                                                                                                         // 58  // 66
    var modalWrap = $('.bs-prompt-modal');                                                               // 59  // 67
    if (!modalWrap.size()) {                                                                             // 60  // 68
      modalWrap = this.createModal();                                                                    // 61  // 69
    }                                                                                                    // 62  // 70
                                                                                                         // 63  // 71
    var modal = modalWrap.find('.modal');                                                                // 64  // 72
                                                                                                         // 65  // 73
    modal.find('.modal-title').html(options.title);                                                      // 66  // 74
                                                                                                         // 67  // 75
    // Reset body.                                                                                       // 68  // 76
    var body = modal.find('.modal-body').html('');                                                       // 69  // 77
                                                                                                         // 70  // 78
    // Function to be called when confirmed.                                                             // 71  // 79
    // Defined up here so it can be used in AutoForm submit hook.                                        // 72  // 80
    function onConfirm(data) {                                                                           // 73  // 81
      if (options.onConfirm) {                                                                           // 74  // 82
        var flag = options.onConfirm(options, modal.get(0), data);                                       // 75  // 83
        if (flag === false) {                                                                            // 76  // 84
          return false;                                                                                  // 77  // 85
        }                                                                                                // 78  // 86
      }                                                                                                  // 79  // 87
                                                                                                         // 80  // 88
      if (options.beforeHide) {                                                                          // 81  // 89
        options.beforeHide(options, modal.get(0), data);                                                 // 82  // 90
      }                                                                                                  // 83  // 91
                                                                                                         // 84  // 92
      modal.modal('hide');                                                                               // 85  // 93
      callback(data ? data : true);                                                                      // 86  // 94
    }                                                                                                    // 87  // 95
                                                                                                         // 88  // 96
    var content = options.content;                                                                       // 89  // 97
    if (options.template) {                                                                              // 90  // 98
      // Render the given template with the specified data and insert it                                 // 91  // 99
      // to the modal-body directly.                                                                     // 92  // 100
      Blaze.renderWithData(                                                                              // 93  // 101
        options.template,                                                                                // 94  // 102
        options.templateData,                                                                            // 95  // 103
        body.get(0)                                                                                      // 96  // 104
      );                                                                                                 // 97  // 105
    }                                                                                                    // 98  // 106
    else if (options.formSchema) {                                                                       // 99  // 107
      // Render the form using the autoform quickForm template.                                          // 100
      Blaze.renderWithData(                                                                              // 101
        Template.quickForm,                                                                              // 102
        {schema: options.formSchema, id: 'bootstrapModalPromptForm'},                                    // 103
        body.get(0)                                                                                      // 104
      );                                                                                                 // 105
                                                                                                         // 106
      // Note the important second parameter true for replacing hooks.                                   // 107
      AutoForm.addHooks('bootstrapModalPromptForm', {                                                    // 108
        onSubmit: function (insertDoc, updateDoc, currentDoc) {                                          // 109
          onConfirm(insertDoc);                                                                          // 110
          return false;                                                                                  // 111
        }                                                                                                // 112
      }, true);                                                                                          // 113
    }                                                                                                    // 114
    else {                                                                                               // 115
      modal.find('.modal-body').html(content);                                                           // 116
    }                                                                                                    // 117
                                                                                                         // 118
    modal.find('.modal-btn-dismiss').html(options.btnDismissText);                                       // 119
    modal.find('.modal-btn-save').html(options.btnOkText);                                               // 120
                                                                                                         // 121
    modal.on('shown.bs.modal', function() {                                                              // 122
      if (options.afterShow) {                                                                           // 123
        options.afterShow(options, modal.get(0));                                                        // 124
      }                                                                                                  // 125
    });                                                                                                  // 126
    modal.on('hidden.bs.modal', function() {                                                             // 127
      if (options.afterHide) {                                                                           // 128
        options.afterHide(options, modal.get(0));                                                        // 129
      }                                                                                                  // 130
    });                                                                                                  // 131
                                                                                                         // 132
    if (options.beforeShow) {                                                                            // 133
      options.beforeShow(options, modal.get(0));                                                         // 134
    }                                                                                                    // 135
                                                                                                         // 136
    modal.find('.modal-btn-dismiss').off().click(function(){                                             // 137
      if (options.beforeHide) {                                                                          // 138
        options.beforeHide(options, modal.get(0));                                                       // 139
      }                                                                                                  // 140
                                                                                                         // 141
      modal.modal('hide');                                                                               // 142
      callback(false);                                                                                   // 143
                                                                                                         // 144
      return false;                                                                                      // 145
    });                                                                                                  // 146
                                                                                                         // 147
                                                                                                         // 148
                                                                                                         // 149
    modal.find('.modal-btn-confirm').off().click(function() {                                            // 150
      if (options.formSchema) {                                                                          // 151
        modal.find('form').submit();                                                                     // 152
      }                                                                                                  // 153
      else {                                                                                             // 154
        onConfirm();                                                                                     // 155
      }                                                                                                  // 156
                                                                                                         // 157
      return false;                                                                                      // 158
    });                                                                                                  // 159
                                                                                                         // 160
    modal.modal('show');                                                                                 // 161
  },                                                                                                     // 162
                                                                                                         // 163
  createModal: function() {                                                                              // 164
    var tpl = '<div class="bs-prompt-modal">' +                                                          // 165
                '<div class="modal fade"><div class="modal-dialog"><div class="modal-content">' +        // 166
                  '<div class="modal-header">' +                                                         // 167
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title"></h4>' +                                                    // 169
                  '</div>' +                                                                             // 170
                  '<div class="modal-body">' +                                                           // 171
                                                                                                         // 172
                  '</div>' +                                                                             // 173
                  '<div class="modal-footer">' +                                                         // 174
                    '<button type="button" class="btn btn-default modal-btn-dismiss" >Close</button>' +  // 175
                    '<button type="button" class="btn btn-primary modal-btn-confirm">OK</button>' +      // 176
                  '</div>' +                                                                             // 177
                                                                                                         // 178
                '</div></div></div>' +                                                                   // 179
              '</div>';                                                                                  // 180
                                                                                                         // 181
    $('body').append(tpl);                                                                               // 182
    return $('.bs-prompt-modal');                                                                        // 183
  }                                                                                                      // 184
};                                                                                                       // 185
                                                                                                         // 186
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 195
                                                                                                                // 196
}).call(this);                                                                                                  // 197
                                                                                                                // 198
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['theduke:bootstrap-modal-prompt'] = {
  BootstrapModalPrompt: BootstrapModalPrompt
};

})();
