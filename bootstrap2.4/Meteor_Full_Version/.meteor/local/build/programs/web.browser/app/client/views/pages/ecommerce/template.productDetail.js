(function(){
Template.__checkName("productDetail");
Template["productDetail"] = new Template("Template.productDetail", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Product detail"),
      category: Spacebars.call("Ecommerce")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content animated fadeInRight">\n\n        <div class="row">\n            <div class="col-lg-12">\n\n                <div class="ibox product-detail">\n                    <div class="ibox-content">\n\n                        <div class="row">\n                            <div class="col-md-5">\n\n\n                                <div class="product-images">\n\n                                    <div>\n                                        <div class="image-imitation">\n                                            [IMAGE 1]\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <div class="image-imitation">\n                                            [IMAGE 2]\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <div class="image-imitation">\n                                            [IMAGE 3]\n                                        </div>\n                                    </div>\n\n\n                                </div>\n\n                            </div>\n                            <div class="col-md-7">\n\n                                <h2 class="font-bold m-b-xs">\n                                    Desktop publishing software\n                                </h2>\n                                <small>Many desktop publishing packages and web page editors now.</small>\n                                <div class="m-t-md">\n                                    <h2 class="product-main-price">$406,602 <small class="text-muted">Exclude Tax</small> </h2>\n                                </div>\n                                <hr>\n\n                                <h4>Product description</h4>\n\n                                <div class="small text-muted">\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n\n                                    <br>\n                                    <br>\n                                    There are many variations of passages of Lorem Ipsum available, but the majority\n                                    have suffered alteration in some form, by injected humour, or randomised words\n                                    which don\'t look even slightly believable.\n                                </div>\n                                <dl class="small m-t-md">\n                                    <dt>Description lists</dt>\n                                    <dd>A description list is perfect for defining terms.</dd>\n                                    <dt>Euismod</dt>\n                                    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n                                    <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n                                    <dt>Malesuada porta</dt>\n                                    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n                                </dl>\n                                <hr>\n\n                                <div>\n                                    <div class="btn-group">\n                                        <button class="btn btn-primary btn-sm"><i class="fa fa-cart-plus"></i> Add to cart</button>\n                                        <button class="btn btn-white btn-sm"><i class="fa fa-star"></i> Add to wishlist </button>\n                                        <button class="btn btn-white btn-sm"><i class="fa fa-envelope"></i> Contact with author </button>\n                                    </div>\n                                </div>\n\n\n\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class="ibox-footer">\n                            <span class="pull-right">\n                                Full stock - <i class="fa fa-clock-o"></i> 14.04.2016 10:04 pm\n                            </span>\n                        The generated Lorem Ipsum is therefore always free\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-12">\n\n                <div class="ibox product-detail">\n                    <div class="ibox-content">\n\n                        <div class="row">\n                            <div class="col-md-5">\n\n\n                                <div class="product-images">\n\n                                    <div>\n                                        <div class="image-imitation">\n                                            [IMAGE 1]\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <div class="image-imitation">\n                                            [IMAGE 2]\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <div class="image-imitation">\n                                            [IMAGE 3]\n                                        </div>\n                                    </div>\n\n\n                                </div>\n\n                            </div>\n                            <div class="col-md-7">\n\n                                <h2 class="font-bold m-b-xs">\n                                    Desktop publishing software\n                                </h2>\n                                <small>Many desktop publishing packages and web page editors now.</small>\n                                <hr>\n                                <div>\n                                    <button class="btn btn-primary pull-right">Add to cart</button>\n                                    <h1 class="product-main-price">$406,602 <small class="text-muted">Exclude Tax</small> </h1>\n                                </div>\n                                <hr>\n                                <h4>Product description</h4>\n\n                                <div class="small text-muted">\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    \'Content here, content here\', making it look like readable English.\n                                    <br>\n                                    <br>\n                                    There are many variations of passages of Lorem Ipsum available, but the majority\n                                    have suffered alteration in some form, by injected humour, or randomised words\n                                    which don\'t look even slightly believable.\n                                </div>\n                                <dl class="dl-horizontal m-t-md small">\n                                    <dt>Description lists</dt>\n                                    <dd>A description list is perfect for defining terms.</dd>\n                                    <dt>Euismod</dt>\n                                    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n                                    <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n                                    <dt>Malesuada porta</dt>\n                                    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n                                    <dt>Felis euismod semper eget</dt>\n                                    <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\n                                </dl>\n                                <div class="text-right">\n                                    <div class="btn-group">\n                                        <button class="btn btn-white btn-sm"><i class="fa fa-star"></i> Add to wishlist </button>\n                                        <button class="btn btn-white btn-sm"><i class="fa fa-envelope"></i> Contact with author </button>\n                                    </div>\n                                </div>\n\n\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class="ibox-footer">\n                            <span class="pull-right">\n                                Full stock - <i class="fa fa-clock-o"></i> 14.04.2016 10:04 pm\n                            </span>\n                        The generated Lorem Ipsum is therefore always free\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n\n\n\n    </div>') ];
}));

})();
