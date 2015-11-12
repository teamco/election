UserLog = new Mongo.Collection('user_log');
UserLogPages = new Meteor.Pagination(UserLog, {
    templateName: 'userLogsData',
    itemTemplate: 'userLogsDataItem',
    perPage: 20,
    divWrapper: false,
    sort: {
        createdAt: -1
    },
    availableSettings: {
        filters: true
    }
});

allowModel(UserLog);