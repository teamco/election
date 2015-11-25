/*
 Meteor.startup(function () {

 Images.allow({
 'insert': function () {
 // add custom authentication code here
 return true;
 }
 });

 });

 Meteor.publish("images", function(){ return Images.find(); });
 */

var imageStore = new FS.Store.S3("images", {
    region: "us-east-1",
    accessKeyId: "***********",
    secretAccessKey: "*********",
    bucket: "*******"
});

var gridfs = new FS.Store.GridFS('gridfsimages', {
    transformWrite: function(fileObj, readStream, writeStream) {
        // Store 10x10 px images
        this.gm(readStream, fileObj.name).resize('10', '10').stream().pipe(writeStream);
        // To pass through stream:
        //readStream.pipe(writeStream);
    }
});

var thumbnail = new FS.Store.FileSystem('thumbnail', {
    path: '~/dev/test/collectionFS/thumbnails',
    transformWrite: function(fileObj, readStream, writeStream) {
        // Store 10x10 px images
        this.gm(readStream, fileObj.name).resize('10', '10').stream().pipe(writeStream);
        // To pass through stream:
        //readStream.pipe(writeStream);
    },


    // we support transformRead function too - its same layout as transformRead
    // and will transform data from the storage adapter to the reading stream.
    // eg. if we want to have encrypt and decrypt data streams
    // Node transform streams:
    // http://nodejs.org/api/zlib.html
    // http://nodejs.org/api/crypto.html
    // But its also possible to pipe data from other stores on to fileObj or other files
    // so data handling is flexible

});

var gridfsimageStore = new FS.Store.FileSystem('gridfsimageStore', {
    path: '~/dev/test/collectionFS/gridfsimageStore',
    transformWrite: function(fileObj, readStream, writeStream) {
        // Store 10x10 px images
        this.gm(readStream, fileObj.name).resize('10', '10').stream().pipe(writeStream);
        // To pass through stream:
        //readStream.pipe(writeStream);
    }});
// we place the thumbnail to be created first since we want the client to get a fast upload response
//
var images = new FS.Collection("images", {

    stores: [thumbnail, gridfsimageStore, gridfs],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});

images.allow({
    insert: function(userId, fileObj) {
        return !!userId; // we could check fileObj.metadata.owner?
    },
    update: function(userId, fileObj) {
        return !!userId;
    },
    remove: function(userId, fileObj) {
        return !!userId;
    },
    // Allow eg. only the user in metadata
    // the shareId is being discussed - eg. for sharing urls
    download: function(userId, fileObj/*, shareId*/) {
        return true;
    },
    fetch: []
});

// Publish images with userId in owner - this regulates reading the
// filerecord data - use allow/deny for "download" for restricting the
// access to the actual data.
Meteor.publish("images", function() {
    return images.find({ 'metadata.owner': this.userId });
});