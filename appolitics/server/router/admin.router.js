Router.route("/admin/users/:id", {where: "server"})
    //.get(function () {
    //    // If a GET request is made, return the user's profile.
    //    var user = Meteor.users.findOne(this.params.id);
    //    if (user) {
    //        this.response.statusCode = 200;
    //        this.response.end(user.profile);
    //    } else {
    //        this.response.statusCode = 404;
    //        this.response.end({status: "404", message: "User not found"});
    //    }
    //})
    .post(function () {
        // If a POST request is made, create the user's profile.
        var args = arguments;
        console.log('post')
    })
    .put(function () {
        // If a PUT request is made, either update the user's profile or
        // create it if it doesn't already exist.
        var args = arguments;
        //debugger
        console.log('put')
    })
    .delete(function () {
        // If a DELETE request is made, delete the user's profile.
        var args = arguments;
        debugger
    });