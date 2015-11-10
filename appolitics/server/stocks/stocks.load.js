Meteor.startup(function () {

    if (!Stocks.find().fetch().length) {

        var availableStocks = ['FB', 'GOOG', 'SAP.DE', 'AAPL'];

        _.each(availableStocks, function(stock){
            Stocks.insert({symbol: stock});
        });
    }
});
