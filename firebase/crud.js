(function(){

    var CRUD = function CRUD() {

    };

    CRUD.prototype.appInstance = 'https://appolitics.firebaseio.com/';
    CRUD.prototype.exampleCandidate = {
            name: "test",
            fullName: "Candidate full Name",
            donate: {
                stuff: {
                    name: "donate name"
                }
            },
            contact: {
                contact1: "contact1",
                contact2: "contact2"
            }
        };

    CRUD.prototype.saveAll = function saveAll(json) {
        var fireBase = new Firebase(this.appInstance);
        fireBase.set({"root" : json});
    };

    CRUD.prototype.getCandidate = function getCandidate() {
        var fireBase = new Firebase(this.appInstance),
            oDfd = new jQuery.Deferred();

        fireBase.child("candidate").on('value', function(snapshot) {
            var allCandidateData = snapshot.val();
            oDfd.resolve(allCandidateData);
        });

        return oDfd.promise();
    };

    CRUD.prototype.getDonateObject= function getDonateObject() {
        var fireBase = new Firebase(this.appInstance),
            oDfd = new jQuery.Deferred();

        fireBase.child("candidate/donate").on('value', function(snapshot) {
            var donate = snapshot.val();
            oDfd.resolve(donate);
        });

        return oDfd.promise();
    };

    window.app = window.app || {};
    window.app.crud = new CRUD();

}());