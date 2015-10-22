(function(){
Template.__checkName("editUser");
Template["editUser"] = new Template("Template.editUser", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal fade",
    id: "editUserModal",
    role: "dialog"
  }, "\n        ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n\n            ", HTML.Raw("<!-- Modal content-->"), "\n            ", HTML.DIV({
    "class": "modal-content"
  }, "\n                ", HTML.Raw('<div class="modal-header">\n                    <button type="button" class="close" data-dismiss="modal">&times;</button>\n                    <h4 class="modal-title">User profile</h4>\n                </div>'), "\n                ", HTML.DIV({
    "class": "modal-body"
  }, "\n\n                    ", HTML.Raw('<ul class="nav nav-tabs">\n                        <li class="active"><a data-toggle="tab" href="#info">Info</a></li>\n                        <li><a data-toggle="tab" href="#profile">Profile</a></li>\n                        <li><a data-toggle="tab" href="#access">Access</a></li>\n                    </ul>'), "\n\n                    ", HTML.FORM({
    role: "form"
  }, "\n\n                        ", HTML.DIV({
    "class": "tab-content"
  }, "\n                            ", Blaze._TemplateWith(function() {
    return {
      email: Spacebars.call(view.lookup("email")),
      profile: Spacebars.call(view.lookup("profile")),
      lastLogin: Spacebars.call(view.lookup("lastLogin")),
      provider: Spacebars.call(view.lookup("provider"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("editUserInfo"));
  }), "\n                            ", Blaze._TemplateWith(function() {
    return {
      firstName: Spacebars.call(view.lookup("firstName")),
      middleName: Spacebars.call(view.lookup("middleName")),
      lastName: Spacebars.call(view.lookup("lastName")),
      birthday: Spacebars.call(view.lookup("birthday")),
      address: Spacebars.call(view.lookup("address"))
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("editUserProfile"));
  }), "\n                            ", HTML.Raw('<div id="access" class="tab-pane fade">\n                                <h3>Menu 2</h3>\n\n                                <p>Some content in menu 2.</p>\n                            </div>'), "\n                        "), "\n\n                    "), "\n\n                "), "\n                ", HTML.Raw('<div class="modal-footer">\n                    <button rel="cancel" type="button" class="btn btn-default">Close</button>\n                    <button rel="submit" type="submit" class="btn btn-info">Submit</button>\n                </div>'), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
