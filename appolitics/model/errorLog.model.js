ErrorLog = new Mongo.Collection('error_log');
ErrorLogPages = new Meteor.Pagination(ErrorLog, {
    templateName: 'errorLogsData',
    itemTemplate: 'errorLogsDataItem',
    perPage: 20,
    divWrapper: false,
    sort: {
        createdAt: -1
    }
});

allowModel(ErrorLog);