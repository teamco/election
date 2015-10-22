(function(){
Template.__checkName("Facebook");
Template["Facebook"] = new Template("Template.Facebook", (function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n        ", Blaze.View("lookup:currentUser.services.facebook.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "services", "facebook", "name"));
    }), " -\n        ", Blaze.View("lookup:currentUser.services.facebook.gender", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "services", "facebook", "gender"));
    }), "\n        ", HTML.BUTTON({
      id: "logout"
    }, "Logout"), "\n    " ];
  }, function() {
    return [ "\n        ", HTML.BUTTON({
      id: "facebook-login",
      "class": "btn btn-default"
    }, " Login with Facebook"), "\n    " ];
  });
}));

}).call(this);
