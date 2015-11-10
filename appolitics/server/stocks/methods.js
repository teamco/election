Meteor.methods({
    // The method expects a valid IPv4 address
    'getStockDetails': function (stocks) {

        var url = [
            "https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quote where symbol in ('",
            _.map(stocks, function (stock) {
                return stock.symbol
            }).join("','"),
            "')&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys"
        ];

        try {

            return HTTP.call("GET", url.join('')).data;

        } catch (error) {

            throwError({
                details: error.arguments,
                error: error.code,
                errorType: error.errno,
                message: error.message,
                reason: error.syscall,
                stack: error.stack
            });
        }
    }
});