var availableStocks = ['FB', 'GOOG', 'SAP', 'APPL'];

Template.adminDashboard.helpers({
    registeredUsers: function () {
        return Accounts.users.find().count();
    },
    onlineUsers: function () {
        return Accounts.users.find({'status.online': true}).count();
    },
    stocks: function () {
        return _.map(availableStocks, function (symbol) {
            return Template.instance()[symbol].get();
        });
    },
    stockChange: function (change) {
        return (change || '').match(/\+/) ? 'up' : 'down';
    }
});

Template.adminDashboard.created = function () {

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