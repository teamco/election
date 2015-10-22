(function(){
Template.__checkName("TopHeader");
Template["TopHeader"] = new Template("Template.TopHeader", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row border-bottom"
  }, "\n        ", HTML.NAV({
    "class": "navbar navbar-static-top white-bg",
    role: "navigation",
    style: "margin-bottom: 0"
  }, "\n            ", HTML.DIV({
    "class": "navbar-header"
  }, "\n                        ", HTML.Raw('<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i>\n                        </a>'), "\n                     ", Spacebars.include(view.lookupTemplate("SearchForm")), "\n                    "), "\n            ", HTML.UL({
    "class": "nav navbar-top-links navbar-right"
  }, "\n                ", HTML.LI(Spacebars.include(view.lookupTemplate("loginButtons"))), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
