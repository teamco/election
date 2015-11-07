Meteor.publish("activeMenu", function () {
    return ActiveMenu.find();
});

Meteor.publish("activeMenuByRoles", function () {
    var roles = [];

    if (this.userId) {
        roles = Roles.getRolesForUser(this.userId);
    }

    return ActiveMenu.find({
        roles: {
            $in: roles
        }
    });
});