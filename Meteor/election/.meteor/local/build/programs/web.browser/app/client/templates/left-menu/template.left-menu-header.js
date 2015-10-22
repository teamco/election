(function(){
Template.__checkName("LeftMenuHeader");
Template["LeftMenuHeader"] = new Template("Template.LeftMenuHeader", (function() {
  var view = this;
  return HTML.LI({
    "class": "nav-header"
  }, "\n        ", HTML.DIV({
    "class": "dropdown profile-element"
  }, "\n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n                ", HTML.SPAN(HTML.IMG({
      alt: "image",
      "class": "img-circle",
      src: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "profile", "picture"));
      }
    })), "\n            " ];
  }), "\n        "), HTML.Raw('\n        <div class="logo-element">\n            AP\n        </div>\n    '));
}));

}).call(this);
