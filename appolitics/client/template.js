Template.registerHelper('shortDate', function (date) {
    return moment(date).format('MM-DD-YYYY');
});

Template.registerHelper('longDate', function (date) {
    return moment(date).format('MM-DD-YYYY HH:MM:SS');
});

Template.registerHelper('onError', function () {
    return function (error) {
        Meteor.call('notify', 'serverMessage:error', 'Error', error, {
            timeout: 1000
        });
    };
});

Template.registerHelper('onSuccess', function () {
    return function (result) {
        Meteor.call('notify', 'serverMessage:success', 'Success', result, {
            timeout: 1000
        });
    };
});