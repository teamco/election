Campaign = new Mongo.Collection('campaigns');

Campaign.allow({
    insert: function (user_uuid, doc) {
        return doc.user_uuid === user_uuid;
    }
});

Campaign.latest = function () {
    return Campaign.find({}, {sort: {date: -1}, limit: 1});
};

Meteor.methods({
    campaigns: function () {
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