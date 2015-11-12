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

Template.errorLogsData.onCreated(function () {

    var user = isUserLogs();

    if (user && user._id) {

        ErrorLogPages.set({
            filters: {
                userLogId: {
                    $in: _.map(
                        UserLog.find({userId: user._id}).fetch(),
                        function (log) {
                            return log._id;
                        }
                    )
                }
            }
        });
    }
});

Template.errorLogsData.helpers({
    errorLogsCount: function () {
        return runTemplateHelper(Template.errorLogs, 'errorLogsCount');
    }
});

Template.errorLogData.helpers({
    errorLog: function () {

        var user = isUserLogs(),
            errorId = Router.current().params.errorId,
            error,
            failed = '/setting/errors';

        if (user && user._id) {

            error = ErrorLog.findOne({
                _id: errorId,
                userLogId: {
                    $in: _.map(
                        UserLog.find({userId: user._id}).fetch(),
                        function (log) {
                            return log._id;
                        }
                    )
                }
            });

            if (!error) {
                failed = '/setting/users/' + user._id + '/errors';
            }
        }

        error = ErrorLog.findOne(errorId);

        if (error) {
            return error;
        }

        return is403(errorId, failed);
    }
});

Template.errorLogsDataItem.helpers({});

Meteor.subscribe("userLogs");
Meteor.subscribe("errorLogs");