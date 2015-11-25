Template.uploadFile.helpers({
    //add you helpers here
});

Template.uploadFile.events({
   'change .myFileInput': function(event, template) {
       FS.Utility.eachFile(event, function (file) {
           Images.insert(file, function (err, fileObj) {
               if (err) {
                   // handle error
               } else {
                   // handle success depending what you need to do
                   var userId = Meteor.userId();
                   var imagesURL = {
                       "profile.image": "/cfs/files/images/" + fileObj._id
                   };
                   Meteor.users.update(userId, {$set: imagesURL});
               }
           });
       });
   }
});

Template.uploadFile.onCreated(function () {
    //add your statement here
});

Template.uploadFile.onRendered(function () {
    //add your statement here
});

Template.uploadFile.onDestroyed(function () {
    //add your statement here
});

