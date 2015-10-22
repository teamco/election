(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/calendar/calendar.js                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
CalEvent = new Mongo.Collection('calevent');                           // 1
                                                                       //
if (Meteor.isClient) {                                                 // 3
                                                                       //
    Template.dialog.events({                                           // 5
        "click .closeDialog": function (event, template) {             // 6
            Session.set('editing_event', null);                        // 7
        },                                                             //
        'click .updateTitle': function (evt, tmpl) {                   // 9
            var title = tmpl.find('#title').value;                     // 10
            Meteor.call('updateTitle', Session.get('editing_event'), title);
            Session.set('editing_event', null);                        // 12
        }                                                              //
    });                                                                //
                                                                       //
    Template.calendar.helpers({                                        // 16
        editing_event: function () {                                   // 17
            return Session.get('editing_event');                       // 18
        }                                                              //
    });                                                                //
                                                                       //
    Template.dialog.helpers({                                          // 22
        title: function () {                                           // 23
            var ce = CalEvent.findOne({ _id: Session.get('editing_event') });
            return ce.title;                                           // 25
        }                                                              //
    });                                                                //
                                                                       //
    Template.dialog.rendered = function () {                           // 29
        if (Session.get('editDialog')) {                               // 30
            var calevent = CalEvent.findOne({ _id: Session.get('editing_event') });
            if (calevent) {                                            // 32
                $('#title').val(calevent.title);                       // 33
            }                                                          //
        }                                                              //
    };                                                                 //
                                                                       //
    Template.calendar.rendered = function () {                         // 38
                                                                       //
        var calendar = $('#calendar').fullCalendar({                   // 40
            dayClick: function (date, allDay, jsEvent, view) {         // 41
                var calendarEvent = {};                                // 42
                calendarEvent.start = date;                            // 43
                calendarEvent.end = date;                              // 44
                calendarEvent.title = 'New Event';                     // 45
                calendarEvent.owner = Meteor.userId();                 // 46
                Meteor.call('saveCalEvent', calendarEvent);            // 47
            },                                                         //
            eventClick: function (calEvent, jsEvent, view) {           // 49
                Session.set('editing_event', calEvent._id);            // 50
                $('#title').val(calEvent.title);                       // 51
            },                                                         //
            eventDrop: function (reqEvent) {                           // 53
                //Meteor.call('moveEvent', reqEvent);                  //
            },                                                         //
            events: function (start, end, callback) {                  // 56
                var calEvents = CalEvent.find({}, { reactive: false }).fetch();
                callback(calEvents);                                   // 58
            },                                                         //
            editable: true,                                            // 60
            selectable: true                                           // 61
        }).data().fullCalendar;                                        //
                                                                       //
        Deps.autorun(function () {                                     // 64
            CalEvent.find().fetch();                                   // 65
            if (calendar) {                                            // 66
                calendar.refetchEvents();                              // 67
            }                                                          //
        });                                                            //
    };                                                                 //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
