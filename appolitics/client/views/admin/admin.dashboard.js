var availableStocks = ['FB', 'GOOG', 'SAP.DE', 'AAPL'];

Template.usersDashboard.helpers({
    registeredUsers: function () {
        return Accounts.users.find().count();
    },
    onlineUsers: function () {
        return Accounts.users.find({'status.online': true}).count();
    }
});

Template.userLogs.helpers({
    userLogsCount: function () {
        return UserLog.find().count();
    }
});

Template.errorLogs.helpers({
    errorLogsCount: function () {
        return ErrorLog.find().count();
    }
});

Template.stocksDashboard.helpers({
    stocks: function () {
        return _.map(availableStocks, function (symbol) {
            return Template.instance()[symbol].get();
        });
    },
    stockChange: function (change) {

        change = change || '';

        return change.match(/\+/) ? 'up' :
            change.match(/\-/) ? 'down' : 'no-change';
    }
});

Template.stocksDashboard.created = function () {

    var scope = this;

    function _getStockInfo(symbol) {
        Meteor.call('getStockDetails', symbol, function (err, res) {
            if (err) throw new Error(err);
            scope[symbol].set(res.query);
        });
    }

    _.each(availableStocks, function (symbol) {
        scope[symbol] = new ReactiveVar("Waiting for response from server...");
        _getStockInfo(symbol)
    });
};

Meteor.subscribe("users");
Meteor.subscribe("userStatus");
Meteor.subscribe("userLogs");
Meteor.subscribe("errorLogs");