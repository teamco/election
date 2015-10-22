(function(){
Template.__checkName("inbox");
Template["inbox"] = new Template("Template.inbox", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n    ", HTML.DIV({
    "class": "col-lg-9 animated fadeInRight"
  }, "\n            ", HTML.Raw('<div class="mail-box-header">\n\n                <form method="get" action="index.html" class="pull-right mail-search">\n                    <div class="input-group">\n                        <input type="text" class="form-control input-sm" name="search" placeholder="Search email">\n                        <div class="input-group-btn">\n                            <button type="submit" class="btn btn-sm btn-primary">\n                                Search\n                            </button>\n                        </div>\n                    </div>\n                </form>\n                <h2>\n                    Inbox (16)\n                </h2>\n                <div class="mail-tools tooltip-demo m-t-md">\n                    <div class="btn-group pull-right">\n                        <button class="btn btn-white btn-sm"><i class="fa fa-arrow-left"></i></button>\n                        <button class="btn btn-white btn-sm"><i class="fa fa-arrow-right"></i></button>\n\n                    </div>\n                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left" title="Refresh inbox"><i class="fa fa-refresh"></i> Refresh</button>\n                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Mark as read"><i class="fa fa-eye"></i> </button>\n                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Mark as important"><i class="fa fa-exclamation"></i> </button>\n                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Move to trash"><i class="fa fa-trash-o"></i> </button>\n\n                </div>\n            </div>'), "\n                ", HTML.DIV({
    "class": "mail-box"
  }, "\n\n                ", HTML.TABLE({
    "class": "table table-hover table-mail"
  }, "\n                ", HTML.TBODY("\n                ", HTML.TR({
    "class": "unread"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Anna Smith")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Lorem ipsum dolor noretek imit set.")), "\n                    ", HTML.TD({
    "class": ""
  }, HTML.I({
    "class": "fa fa-paperclip"
  })), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "6.10 AM"), "\n                "), "\n                ", HTML.TR({
    "class": "unread"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks",
    checked: ""
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Jack Nowak")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Aldus PageMaker including versions of Lorem Ipsum.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "8.22 PM"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Facebook"), " ", HTML.SPAN({
    "class": "label label-warning pull-right"
  }, "Clients"), " "), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Many desktop publishing packages and web page editors.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "Jan 16"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Mailchip")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "There are many variations of passages of Lorem Ipsum.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "Mar 22"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Alex T."), " ", HTML.SPAN({
    "class": "label label-danger pull-right"
  }, "Documents")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Lorem ipsum dolor noretek imit set.")), "\n                    ", HTML.TD({
    "class": ""
  }, HTML.I({
    "class": "fa fa-paperclip"
  })), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "December 22"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Monica Ryther")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "The standard chunk of Lorem Ipsum used.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "Jun 12"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Sandra Derick")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Contrary to popular belief.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "May 28"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Patrick Pertners"), " ", HTML.SPAN({
    "class": "label label-info pull-right"
  }, "Adv")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "If you are going to use a passage of Lorem ")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "May 28"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Michael Fox")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Humour, or non-characteristic words etc.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "Dec 9"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Damien Ritz")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Oor Lorem Ipsum is that it has a more-or-less normal.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "Jun 11"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Anna Smith")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Lorem ipsum dolor noretek imit set.")), "\n                    ", HTML.TD({
    "class": ""
  }, HTML.I({
    "class": "fa fa-paperclip"
  })), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "6.10 AM"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Jack Nowak")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Aldus PageMaker including versions of Lorem Ipsum.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "8.22 PM"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Mailchip")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "There are many variations of passages of Lorem Ipsum.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "Mar 22"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Alex T."), " ", HTML.SPAN({
    "class": "label label-warning pull-right"
  }, "Clients")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Lorem ipsum dolor noretek imit set.")), "\n                    ", HTML.TD({
    "class": ""
  }, HTML.I({
    "class": "fa fa-paperclip"
  })), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "December 22"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Monica Ryther")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "The standard chunk of Lorem Ipsum used.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "Jun 12"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Sandra Derick")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Contrary to popular belief.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "May 28"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Patrick Pertners"), " "), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "If you are going to use a passage of Lorem ")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "May 28"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Michael Fox")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Humour, or non-characteristic words etc.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "Dec 9"), "\n                "), "\n                ", HTML.TR({
    "class": "read"
  }, "\n                    ", HTML.TD({
    "class": "check-mail"
  }, "\n                        ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                    "), "\n                    ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Damien Ritz")), "\n                    ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: "mail_detail.html"
  }, "Oor Lorem Ipsum is that it has a more-or-less normal.")), "\n                    ", HTML.TD({
    "class": ""
  }), "\n                    ", HTML.TD({
    "class": "text-right mail-date"
  }, "Jun 11"), "\n                "), "\n                "), "\n                "), "\n\n\n                "), "\n            "), "\n        ");
}));

}).call(this);
