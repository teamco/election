(function(){
Template.__checkName("editUserProfile");
Template["editUserProfile"] = new Template("Template.editUserProfile", (function() {
  var view = this;
  return HTML.DIV({
    id: "profile",
    "class": "tab-pane fade"
  }, "\n        ", HTML.DIV({
    "class": "form-group"
  }, "\n            ", HTML.Raw('<label for="user-first-name">First name:</label>'), "\n            ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    id: "user-first-name",
    value: function() {
      return Spacebars.mustache(view.lookup("firstName"));
    }
  }), "\n        "), "\n        ", HTML.DIV({
    "class": "form-group"
  }, "\n            ", HTML.Raw('<label for="user-middle-name">Middle name:</label>'), "\n            ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    id: "user-middle-name",
    value: function() {
      return Spacebars.mustache(view.lookup("middleName"));
    }
  }), "\n        "), "\n        ", HTML.DIV({
    "class": "form-group"
  }, "\n            ", HTML.Raw('<label for="user-last-name">Last name:</label>'), "\n            ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    id: "user-last-name",
    value: function() {
      return Spacebars.mustache(view.lookup("lastName"));
    }
  }), "\n        "), "\n        ", HTML.DIV({
    "class": "form-group"
  }, "\n            ", HTML.Raw('<label for="user-birthday">Birthday:</label>'), "\n\n            ", HTML.DIV({
    "class": "input-group datetimepicker"
  }, "\n                ", HTML.Raw('<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>'), "\n                ", HTML.INPUT({
    "class": "set-due-date form-control",
    type: "text",
    id: "user-birthday",
    value: function() {
      return Spacebars.mustache(view.lookup("birthday"));
    }
  }), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "form-group"
  }, "\n            ", HTML.Raw('<label for="user-country">Country:</label>'), "\n            ", HTML.SELECT({
    "class": "form-control"
  }, "\n                ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("countries"));
  }, function() {
    return [ "\n                    ", HTML.OPTION({
      value: function() {
        return Spacebars.mustache(view.lookup("name"));
      }
    }, Blaze.View("lookup:name", function() {
      return Spacebars.mustache(view.lookup("name"));
    })), "\n                " ];
  }), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "form-group"
  }, "\n            ", HTML.Raw('<label for="user-address">Address:</label>'), "\n            ", HTML.TEXTAREA({
    type: "text",
    "class": "form-control",
    id: "user-address",
    value: function() {
      return Spacebars.mustache(view.lookup("address"));
    }
  }), "\n        "), "\n    ");
}));

}).call(this);
