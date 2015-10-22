(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.DIV("\n    ", HTML.getTag("blaze-template")({
    name: "loginButtons"
  }), HTML.Raw('\n    <h1>\n        <a ui-sref="parties">Home</a>\n    </h1>\n\n    <div ui-view=""></div>\n'));
}));
Meteor.startup(Template.body.renderToDocument);

Meteor.startup(function() { $('body').attr({"ng-app":"appolitics"}); });

}).call(this);
