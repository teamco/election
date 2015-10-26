'use strict';

Meteor.publish('leftMenu', function (options, searchString) {
    var where = {
        'name': {
            '$regex': '.*' + (searchString || '') + '.*',
            '$options': 'i'
        }
    };
    Counts.publish(this, 'numberOfLeftMenu', LeftMenu.find(where), {noReady: true});
    return LeftMenu.find(where, options);
});