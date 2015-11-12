function _filterByUser(user) {

    return _.map(
        UserLog.find({userId: user._id}).fetch(),
        function (log) {
            return log._id;
        }
    );
}

function _getErrorData(errorId) {

    var user = isUserLogs(),
        error,
        failed = '/setting/errors';

    errorId = errorId || Router.current().params.errorId;

    if (user && user._id) {

        error = ErrorLog.findOne({
            _id: errorId,
            userLogId: {
                $in: _filterByUser(user)
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
                    $in: _filterByUser(user)
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
    errorLog: _getErrorData
});

Template.errorLogsDataItem.helpers({});

Meteor.subscribe("users");
Meteor.subscribe("userLogs");
Meteor.subscribe("errorLogs");