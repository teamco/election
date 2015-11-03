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

        var router = this,
            userId = router.params.id;

        Meteor.call(
            'updateUser', {
                userId: userId,
                profile: profile,
                access: access
            },
            function (error, result) {

                if (error) {
                    router.redirect('/admin/users/' + userId, function () {
                        Bert.alert(error.reason, 'danger');
                    });
                }

                router.redirect('/admin/users');
            }
        );
    }
});