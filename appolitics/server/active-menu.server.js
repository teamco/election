Meteor.publish("activeMenu", function () {
    return ActiveMenu.find();
});

Meteor.publish("activeMenuByRoles", function () {
    return ActiveMenu.find();
});

Meteor.methods({
    activeMenu: function () {
        return {
            create: function () {
            },
            update: function () {
            },
            destroy: function () {
            }
        }
    }
});