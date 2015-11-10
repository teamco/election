Meteor.methods({
    // The method expects a valid IPv4 address
    'getStockDetails': function (symbol) {
        var url = "https://query.yahooapis.com/v1/public/yql?q=";
        url += "select * from yahoo.finance.quote where symbol = '" + symbol + "'";
        url += "&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys";
        try {

            return HTTP.call("GET", url).data;

        } catch(error) {

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