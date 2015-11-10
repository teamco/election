var availableStocks = function () {
    return Stocks.find().fetch();
};

Template.stocksDashboard.helpers({
    stocks: function () {
        return _.map(availableStocks(), function (stock) {
            return Template.instance()[stock.symbol].get();
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

    // Init reactive var
    _.each(availableStocks(), function (stock) {
        scope[stock.symbol] = new ReactiveVar("Waiting for response from server...");
    });

    Meteor.call('getStockDetails', availableStocks(), function (err, res) {

        if (throwError(err)) {
            return false;
        }

        _.each(res.query.results.quote, function (stock) {
            scope[stock.Symbol].set(stock);
        });
    });
};

Meteor.subscribe("stocks");