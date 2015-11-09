Template.errorLogsData.helpers({
    errorLogsCount: function () {
        return ErrorLog.find().count();
    }
});

Template.errorLogData.helpers({
    errorLog: function() {
        return ErrorLog.find(
            Router.current().params.errorId
        ).fetch()[0];
    }
});

Template.errorLogsDataItem.helpers({
});