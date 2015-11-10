Template.errorLogData.events({
    'click a[data-type="error"]': function (event) {

        event.preventDefault();

        var errorId = Router.current().params.errorId,
            errorLog = ErrorLog.findOne(errorId);

        if (errorLog.fixed) {
            Bert.alert(TAPi18n.__('error_already_fixed'), 'warning');
            return false;
        }

        Meteor.call(
            'updateErrorLog', {
                errorId: errorId
            },
            function (error, result) {

                if (throwError(error)) {
                    return false;
                }

                Bert.alert(TAPi18n.__('error_fixed'), 'info');
                Router.go('/setting/errors');
            }
        );
    }
});

Template.errorLogsData.helpers({
    errorLogsCount: function () {
        return ErrorLog.find().count();
    }
});

Template.errorLogData.helpers({
    errorLog: function () {
        return ErrorLog.find(
            Router.current().params.errorId
        ).fetch()[0];
    }
});

Template.errorLogsDataItem.helpers({});