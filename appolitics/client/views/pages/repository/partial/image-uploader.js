// This should set default store to thumbnail store
// Setting the store on the client could change the way things get uploaded/downloaded in the future
// eg. the s3 allows direct upload and direct download - but for security we are going to add signed urls
// future package: cfs-s3cloud storage adapter
var imageStore = new FS.Store.FileSystem("thumbnail");

var images = new FS.Collection("images", {
    stores: [imageStore],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});

Meteor.subscribe("images");

var images = new FS.Collection("images", {
    stores: [imageStore],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});

Template.imageUploader.images = function () {
    return images.find();
};

Template.imageUploader.events({
    'change #files': function(event, temp) {
      console.log('files changed');
      FS.Utility.eachFile(event, function(file) {
        var fileObj = new FS.File(file);
        fileObj.metadata = { owner: Meteor.userId() };
        images.insert(fileObj);
      });
    },
    'dropped #dropzone': function(event, temp) {
      console.log('files droped');
      FS.Utility.eachFile(event, function(file) {
        var fileObj = new FS.File(file);
        fileObj.metadata = { owner: Meteor.userId() };
        images.insert(fileObj);
      });
    },
    'click .btnRemove': function(event, temp) {
      this.remove();
    }
});