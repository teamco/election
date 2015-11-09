Meteor.methods({
    updateUserLog: function (url) {

        var connection = this.connection,
            headers = connection.httpHeaders;

        if (url.match(/setting\/users\/(logs|errors)/)) {
            return false;
        }

        UserLog.insert({
            userId: this.userId,
            createdAt: new Date(),
            url: url,
            clientAddress: connection.clientAddress,
            httpHeaders: {
                "accept-language": headers["accept-language"],
                "user-agent": headers["user-agent"],
                "x-forwarded-for": headers["x-forwarded-for"],
                host: headers.host
            }
        });
    }
});