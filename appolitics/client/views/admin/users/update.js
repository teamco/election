function _filterValueByType(input, type) {

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

function _collectData($elements) {

    var data = {};

    _.each($elements, function (input) {
        data[input.name] = _filterValueByType(input, input.dataset.type);
    });

    return data;
}

Template.editUser.events({

    'click a[data-type="update-user"]': function (event) {

        event.preventDefault();

        var $profile = $('#profile').find('input:enabled, textarea:enabled, select:enabled'),
            $access = $('#access').find('input:enabled'),
            profile = _collectData($profile),
            access = _collectData($access);

        var userId = Router.current().params.id;

        Meteor.call(
            'updateUser', {
                userId: userId,
                profile: profile,
                access: access
            },
            function (error, user) {

                if (error) {

                    Bert.alert(error.message, 'danger');

                } else {

                    Bert.alert(
                        TAPi18n.__('user_updated', user.profile.email),
                        'info'
                    );

                    Router.go('/setting/users');
                }
            }
        );
    }
});