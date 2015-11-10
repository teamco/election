window.onerror = function (message, url, line, column, error) {

    throwError({
        details: "line: " + line + ", column: " + column,
        error: error.message,
        errorType: error.name,
        message: message,
        reason: url,
        stack: error.stack
    });
};