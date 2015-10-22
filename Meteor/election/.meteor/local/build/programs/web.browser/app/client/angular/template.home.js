(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div ui-view=""></div>');
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return "";
}));

Meteor.startup(function() { $('body').attr({"ng-app":"inspinia","ng-controller":"MainCtrl as main"}); });

}).call(this);
