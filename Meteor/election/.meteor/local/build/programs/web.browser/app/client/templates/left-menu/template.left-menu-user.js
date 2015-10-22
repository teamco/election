(function(){
Template.__checkName("LeftMenuUser");
Template["LeftMenuUser"] = new Template("Template.LeftMenuUser", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar-default navbar-static-side",
    role: "navigation"
  }, "\n        ", HTML.DIV({
    "class": "sidebar-collapse"
  }, "\n            ", HTML.UL({
    "class": "nav",
    id: "side-menu"
  }, "\n                ", Spacebars.include(view.lookupTemplate("LeftMenuHeader")), "\n                ", HTML.Raw('<li class="active">\n                    <a href="index.html"><i class="fa fa-th-large"></i> <span class="nav-label">Candidates</span></a>\n                </li>'), "\n                ", HTML.Raw('<li>\n                    <a href="index.html"><i class="fa fa-th-large"></i> <span class="nav-label">Parties</span></a>\n                </li>'), "\n                ", HTML.Raw('<li>\n                    <a href="mailbox.html"><i class="fa fa-envelope"></i> <span class="nav-label">Mailbox </span><span class="label label-warning pull-right">16/24</span></a>\n                    <ul class="nav nav-second-level">\n                        <li><a href="/eyal">Inbox</a></li>\n                        <li><a href="mail_detail.html">Email view</a></li>\n                        <li><a href="mail_compose.html">Compose email</a></li>\n                        <li><a href="email_template.html">Email templates</a></li>\n                    </ul>\n                </li>'), "\n                ", HTML.Raw('<li>\n                    <a name="donate"><i class="fa fa-dollar"></i><span class="nav-label">Donate</span></a>\n                </li>'), "\n                ", HTML.Raw('<li>\n                    <a href="minor.html"><i class="fa fa-th-large"></i> <span class="nav-label">Events</span> </a>\n                </li>'), "\n                ", HTML.Raw('<li>\n                    <a href="#"><i class="fa fa-edit"></i> <span class="nav-label">Forms</span></a>\n                </li>'), "\n            "), "\n\n        "), "\n    ");
}));

}).call(this);
