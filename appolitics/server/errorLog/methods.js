Meteor.methods({
    createErrorLog: function (error) {

        error.createdAt = new Date();
        error.updatedAt = new Date();

        error.userLogId = UserLog.findOne(
            {userId: this.userId}, {
                sort: {createdAt: -1},
                fields: {userId: 1}
            }
        )._id;

        ErrorLog.insert(error);
    },
    updateErrorLog: function (error) {

    }
});