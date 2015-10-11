Meteor.publish('adminApp', function () {
});

Meteor.publish('publicApp', function () {
});

Meteor.publish('privateApp', function () {
});

Meteor.publish("userData", function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId},
            {fields: {'other': 1, 'things': 1}});
    } else {
        this.ready();
    }
});

Meteor.publish('events', function (start, end) {
    return Events.find();
    /*{
     $and: [
     {date: {$gte: start}},
     {date: {$lte: end}}
     ]
     });
     */
});