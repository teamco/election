CalEvent = new Mongo.Collection('calevent');

CalEvent.allow({
    insert: function (user_uuid, doc) {debugger;
        return doc.user_uuid === user_uuid;
    }
});
if (Meteor.isServer) {
    Meteor.startup(function () {
        Meteor.methods({
            'saveCalEvent': function (ce) {debugger;
                CalEvent.insert(ce);
            },
            'updateTitle': function (id, title) {debugger
                return CalEvent.update({_id: id}, {$set: {title: title}});
            },
            'moveEvent': function (reqEvent) {debugger
                return CalEvent.update({_id: reqEvent._id}, {
                    $set: {
                        start: reqEvent.start,
                        end: reqEvent.end
                    }
                })
            }
        })
    });
}