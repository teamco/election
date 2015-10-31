function filterValueByType(input, type) {

    type = type || input.type;

    switch (type) {
        case 'date':
            return new Date(input.value);
            break;
        case 'checkbox':
            return input.checked;
            break;
        default:
            return input.value;
            break;
    }
}

UsersController = RouteController.extend({
    update: function () {
        var $profile = $('#profile').find('input:enabled, textarea:enabled, select:enabled'),
            $access = $('#access').find('input:enabled'),
            profile = {},
            access = {};

        _.each($profile, function (input) {
            profile[input.name] = filterValueByType(input, input.dataset.type);
        });

        _.each($access, function (input) {
            access[input.name] = filterValueByType(input, input.dataset.type);
        });

        debugger
        this.redirect('/admin/users');
    }
});