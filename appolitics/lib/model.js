isOwnerDocument = function (userId, doc, fields, modifier) {
    console.log(">>>>>>>>>", arguments)
    return doc && doc.userId === userId;
};

allowModel = function (collection) {

    collection.allow({
        insert: isOwnerDocument,
        update: isOwnerDocument,
        remove: isOwnerDocument
    });
};

denyModel = function (collection) {

    collection.deny({
        update: function (userId, docs, fields, modifier) {

            // can't change owners
            return _.contains(fields, 'userId');
        }
    });
};