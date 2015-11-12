ErrorLog = new Mongo.Collection('error_log');
ErrorLogPages = new Meteor.Pagination(ErrorLog, {
    templateName: 'errorLogsData',
    itemTemplate: 'errorLogsDataItem',
    perPage: 10,
    divWrapper: false,
    sort: {
        updatedAt: -1
    },
    availableSettings: {
        filters: true
    }
});

allowModel(ErrorLog);