(function(){
Template.__checkName("Index");
Template["Index"] = new Template("Template.Index", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("dashboard")), "\n    ", Spacebars.include(view.lookupTemplate("Content")) ];
}));

}).call(this);
