(function(){
Template.__checkName("timelineTwo");
Template["timelineTwo"] = new Template("Template.timelineTwo", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Timeline - version 2"),
      category: Spacebars.call("Miscellaneous")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content">\n        <div class="row animated fadeInRight">\n            <div class="col-lg-12">\n                <div class="ibox float-e-margins">\n                    <div class="text-center float-e-margins p-md">\n                        <span>Turn on/off color/background or orientation version: </span>\n                        <a href="#" class="btn btn-xs btn-primary" id="lightVersion">Light version</a>\n                        <a href="#" class="btn btn-xs btn-primary" id="darkVersion">Dark version</a>\n                        <a href="#" class="btn btn-xs btn-primary" id="leftVersion">Left version</a>\n                    </div>\n                    <div class="ibox-content" id="ibox-content">\n\n                        <div id="vertical-timeline" class="vertical-container dark-timeline center-orientation">\n                            <div class="vertical-timeline-block">\n                                <div class="vertical-timeline-icon navy-bg">\n                                    <i class="fa fa-briefcase"></i>\n                                </div>\n\n                                <div class="vertical-timeline-content">\n                                    <h2>Meeting</h2>\n                                    <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale.\n                                    </p>\n                                    <a href="#" class="btn btn-sm btn-primary"> More info</a>\n                                    <span class="vertical-date">\n                                        Today <br>\n                                        <small>Dec 24</small>\n                                    </span>\n                                </div>\n                            </div>\n\n                            <div class="vertical-timeline-block">\n                                <div class="vertical-timeline-icon blue-bg">\n                                    <i class="fa fa-file-text"></i>\n                                </div>\n\n                                <div class="vertical-timeline-content">\n                                    <h2>Send documents to Mike</h2>\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.</p>\n                                    <a href="#" class="btn btn-sm btn-success"> Download document </a>\n                                    <span class="vertical-date">\n                                        Today <br>\n                                        <small>Dec 24</small>\n                                    </span>\n                                </div>\n                            </div>\n\n                            <div class="vertical-timeline-block">\n                                <div class="vertical-timeline-icon lazur-bg">\n                                    <i class="fa fa-coffee"></i>\n                                </div>\n\n                                <div class="vertical-timeline-content">\n                                    <h2>Coffee Break</h2>\n                                    <p>Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s. </p>\n                                    <a href="#" class="btn btn-sm btn-info">Read more</a>\n                                    <span class="vertical-date"> Yesterday <br><small>Dec 23</small></span>\n                                </div>\n                            </div>\n\n                            <div class="vertical-timeline-block">\n                                <div class="vertical-timeline-icon yellow-bg">\n                                    <i class="fa fa-phone"></i>\n                                </div>\n\n                                <div class="vertical-timeline-content">\n                                    <h2>Phone with Jeronimo</h2>\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>\n                                    <span class="vertical-date">Yesterday <br><small>Dec 23</small></span>\n                                </div>\n                            </div>\n\n                            <div class="vertical-timeline-block">\n                                <div class="vertical-timeline-icon lazur-bg">\n                                    <i class="fa fa-user-md"></i>\n                                </div>\n\n                                <div class="vertical-timeline-content">\n                                    <h2>Go to the doctor dr Smith</h2>\n                                    <p>Find some issue and go to doctor. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. </p>\n                                    <span class="vertical-date">Yesterday <br><small>Dec 23</small></span>\n                                </div>\n                            </div>\n\n                            <div class="vertical-timeline-block">\n                                <div class="vertical-timeline-icon navy-bg">\n                                    <i class="fa fa-comments"></i>\n                                </div>\n\n                                <div class="vertical-timeline-content">\n                                    <h2>Chat with Monica and Sandra</h2>\n                                    <p>Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>\n                                    <span class="vertical-date">Yesterday <br><small>Dec 23</small></span>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>') ];
}));

})();
