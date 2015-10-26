Meteor.publish("activeMenu", function () {
    return ActiveMenu.find();
});