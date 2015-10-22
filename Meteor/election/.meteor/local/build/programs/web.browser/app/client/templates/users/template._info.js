(function(){
Template.__checkName("editUserInfo");
Template["editUserInfo"] = new Template("Template.editUserInfo", (function() {
  var view = this;
  return HTML.DIV({
    id: "info",
    "class": "tab-pane fade in active"
  }, "\n        ", HTML.DIV({
    "class": "form-group"
  }, "\n            ", HTML.Raw('<label for="user-email">Email address:</label>'), "\n            ", HTML.INPUT({
    type: "email",
    disabled: "disabled",
    "class": "form-control",
    id: "user-email",
    value: function() {
      return Spacebars.mustache(view.lookup("email"));
    }
  }), "\n        "), "\n        ", HTML.DIV({
    "class": "form-group"
  }, "\n            ", HTML.Raw('<label for="user-provider">Provider:</label>'), "\n            ", HTML.INPUT({
    id: "user-provider",
    type: "text",
    "class": "form-control",
    disabled: "disabled",
    value: function() {
      return Spacebars.mustache(view.lookup("provider"));
    }
  }), "\n        "), "\n        ", HTML.DIV({
    "class": "form-group"
  }, "\n            ", HTML.Raw('<label for="user-profile">Profile:</label>'), "\n            ", HTML.INPUT({
    id: "user-profile",
    type: "text",
    "class": "form-control",
    disabled: "disabled",
    value: function() {
      return Spacebars.mustache(view.lookup("profile"));
    }
  }), "\n        "), "\n        ", HTML.DIV({
    "class": "form-group"
  }, "\n            ", HTML.Raw('<label for="user-last-login">Last login:</label>'), "\n            ", HTML.INPUT({
    id: "user-last-login",
    type: "text",
    "class": "form-control",
    disabled: "disabled",
    value: function() {
      return Spacebars.mustache(view.lookup("longDate"), view.lookup("lastLogin"));
    }
  }), "\n        "), "\n    ");
}));

}).call(this);
