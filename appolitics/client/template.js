Template.registerHelper('shortDate', function (date) {
    return moment(date).format('MM-DD-YYYY');
});

Template.registerHelper('longDate', function (date) {
    return moment(date).format('MM-DD-YYYY HH:MM:SS');
});