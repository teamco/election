Template.registerHelper('formatDate', function (date, format) {
    if (format === 'long') format = 'MMMM DD, YYYY H:mm:ss';
    if (format === 'short') format = 'MM-DD-YYYY H:mm:ss';
    return moment(date).format(format);
});