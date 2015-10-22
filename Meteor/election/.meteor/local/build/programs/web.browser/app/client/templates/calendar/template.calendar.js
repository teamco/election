(function(){
Template.__checkName("calendar");
Template["calendar"] = new Template("Template.calendar", (function() {
  var view = this;
  return [ Blaze.If(function() {
    return Spacebars.call(view.lookup("editing_event"));
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("dialog")), "\n    " ];
  }), HTML.Raw('\n    <div class="container">\n        <h3>Campaign Calendar Application</h3>\n\n        <div id="calendar">\n\n        </div>\n    </div>') ];
}));

Template.__checkName("dialog");
Template["dialog"] = new Template("Template.dialog", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal fade in show",
    id: "",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "",
    "aria-hidden": "true"
  }, "\n        ", HTML.DIV({
    "class": "modal-dialog"
  }, "\n            ", HTML.DIV({
    "class": "modal-content"
  }, "\n                ", HTML.Raw('<div class="modal-header">\n                    <button type="button" class="close closeDialog" data-dismiss="modal" aria-hidden="true">&times;</button>\n                    <h4 class="modal-title" id="">Edit Event</h4>\n                </div>'), "\n                ", HTML.DIV({
    "class": "modal-body"
  }, "\n                    ", HTML.DIV({
    "class": "form-group"
  }, "\n                        ", HTML.Raw('<label for="title">Title</label>'), "\n                        ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    id: "title",
    placeholder: "Enter a Title",
    value: function() {
      return Spacebars.mustache(view.lookup("title"));
    }
  }), "\n                    "), "\n                "), "\n                ", HTML.Raw('<div class="modal-footer">\n                    <button type="button" class="btn btn-default closeDialog" data-dismiss="modal">Close</button>\n                    <button type="button" class="btn btn-primary updateTitle">Save</button>\n                </div>'), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
