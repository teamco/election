Meteor.publish('adminApp', function () {
});

Meteor.publish('publicApp', function () {
});

Meteor.publish('privateApp', function () {
});

Meteor.publish('events', function (start, end) {
    return Events.find();/*{
        $and: [
            {date: {$gte: start}},
            {date: {$lte: end}}
        ]
    });
    */
});