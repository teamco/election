(function(){
Template.__checkName("appBody");
Template["appBody"] = new Template("Template.appBody", (function() {
  var view = this;
  return HTML.DIV({
    id: "wrapper"
  }, "\n        ", Spacebars.include(view.lookupTemplate("LeftMenu")), "\n\n        ", HTML.DIV({
    id: "page-wrapper",
    "class": "gray-bg"
  }, "\n            ", Spacebars.include(view.lookupTemplate("TopHeader")), "\n            ", Spacebars.include(view.lookupTemplate("notifications")), "\n            ", Spacebars.include(view.lookupTemplate("yield")), "\n        "), "\n    ");
}));

}).call(this);
