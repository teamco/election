(function(){
Template.__checkName("LeftMenu");
Template["LeftMenu"] = new Template("Template.LeftMenu", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar-default navbar-static-side",
    role: "navigation"
  }, "\n            ", HTML.DIV({
    "class": "sidebar-collapse"
  }, "\n                ", HTML.UL({
    "class": "nav",
    id: "side-menu"
  }, "\n                    ", Spacebars.include(view.lookupTemplate("LeftMenuHeader")), "\n                    ", HTML.Raw('<li class="active">\n                        <a href="dashboard"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></a>\n                    </li>'), "\n                    ", HTML.Raw('<li>\n                        <a href="campaignManage"><i class="fa fa-th-large"></i> <span class="nav-label">Campaign Management</span></a>\n                    </li>'), "\n                    ", HTML.Raw('<li>\n                        <a href="contentMange"><i class="fa fa-envelope"></i> <span class="nav-label">Content Management</span></a>\n                        <ul class="nav nav-second-level">\n                            <li><a href="contentReports">Reports</a></li>\n                            <li><a href="fileRepository">Files</a></li>\n                        </ul>\n                    </li>'), "\n                    ", HTML.Raw('<li>\n                        <a href="mailbox"><i class="fa fa-envelope"></i> <span class="nav-label">Mailbox </span><span class="label label-warning pull-right">16/24</span></a>\n                        <ul class="nav nav-second-level">\n                            <li><a href="inbox">Inbox</a></li>\n                            <li><a href="mail_compose">Compose email</a></li>\n                        </ul>\n                    </li>'), "\n                    ", HTML.Raw('<li>\n                        <a href="calendar"><i class="fa fa-edit"></i> <span class="nav-label">Calendar</span> </a>\n                    </li>'), "\n                    ", HTML.Raw('<li>\n                        <a href="events"><i class="fa fa-th-large"></i> <span class="nav-label">Events</span> </a>\n                    </li>'), "\n                    ", HTML.Raw('<li>\n                        <a href="donations"><i class="fa fa-dollar"></i> <span class="nav-label">Donations</span></a>\n                    </li>'), "\n                "), "\n\n            "), "\n        ");
}));

}).call(this);
