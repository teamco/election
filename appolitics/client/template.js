Template.registerHelper('formatDate', function (date, format) {
    if (format === 'long') format = 'MMMM DD, YYYY H:m:s';
    if (format === 'short') format = 'MM-DD-YYYY H:m:s';
    return moment(date).format(format);
});