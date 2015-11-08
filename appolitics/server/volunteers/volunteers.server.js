Meteor.startup(function () {

    Volunteers.insert(
        {
            'userId': 'tjkDvbp4dyR5HXZgR',
            'followingId': '7322B8yNDJupxp3hE',
            'create_date': new Date()
        }
    )
});

Meteor.publish("myVolunteers", function () {
    var volunteersArray = Volunteers.find({
        followingId: this.userId
    }).fetch();


    var volIds = _.map(volunteersArray, function(volunteer){
        return volunteer.userId;
    });

    return Accounts.users.find({
        _id: {
            $in: volIds
        }
    });
});