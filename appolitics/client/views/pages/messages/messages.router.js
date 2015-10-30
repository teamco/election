Router.route('/messages', function () {
    this.render('messages');
});

Router.route('/messages/views', function () {
    this.render('emailView');
}, {name: 'messages.views'});