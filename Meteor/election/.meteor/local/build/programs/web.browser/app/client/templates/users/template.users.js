(function(){
Template.__checkName("userData");
Template["userData"] = new Template("Template.userData", (function() {
  var view = this;
  return [ HTML.Raw("<h2>Users list</h2>\n\n    "), HTML.TABLE({
    "class": "table userData"
  }, "\n        ", HTML.THEAD("\n        ", HTML.TR("\n            ", HTML.TH("Name"), "\n            ", HTML.TH("Email"), "\n            ", HTML.TH("Provider"), "\n            ", HTML.TH("Last login"), "\n            ", HTML.TH(), "\n        "), "\n        "), "\n        ", HTML.TBODY("\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("allUsers"));
  }, function() {
    return [ "\n            ", HTML.TR({
      "class": function() {
        return Blaze.If(function() {
          return Spacebars.dataMustache(view.lookup("isCurrentUser"), view.lookup("_id"));
        }, function() {
          return "current";
        });
      }
    }, "\n                ", HTML.TD({
      "class": "user-info"
    }, "\n                    ", HTML.IMG({
      src: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "picture"));
      },
      alt: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "name"));
      }
    }), "\n                    ", HTML.A({
      href: function() {
        return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "link"));
      }
    }, Blaze.View("lookup:profile.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "name"));
    })), "\n                "), "\n                ", HTML.TD(Blaze.View("lookup:profile.email", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "email"));
    })), "\n                ", HTML.TD(Blaze.View("lookup:profile.provider", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "provider"));
    })), "\n                ", HTML.TD(Blaze.View("lookup:longDate", function() {
      return Spacebars.mustache(view.lookup("longDate"), Spacebars.dot(view.lookup("profile"), "updatedAt"));
    })), "\n                ", HTML.TD("\n                    ", Blaze._TemplateWith(function() {
      return {
        collection: Spacebars.call("Meteor.users"),
        _id: Spacebars.call(view.lookup("_id")),
        onError: Spacebars.call(view.lookup("onError")),
        onSuccess: Spacebars.call(view.lookup("onSuccess")),
        beforeRemove: Spacebars.call(view.lookup("beforeRemove")),
        "class": Spacebars.call("btn btn-danger")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("quickRemoveLink"));
    }), "\n                    ", HTML.BUTTON({
      rel: "editUser",
      type: "button",
      "class": "btn btn-info"
    }, "Show"), "\n                "), "\n            "), "\n        " ];
  }), "\n        "), "\n    "), "\n    ", Spacebars.include(view.lookupTemplate("editUser")) ];
}));

}).call(this);
