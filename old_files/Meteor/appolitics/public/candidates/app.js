(function() {

    var SITE = function SITE() {

    };

    SITE.prototype.getCandidateTpl = function (opts) {
        var html = jQuery('.template').html();

    };

    SITE.prototype.addBlog = function(data) {
        var html = jQuery('.template').html();
        debugger;
    };

    SITE.prototype.init = function init() {
        var key, info;
        debugger;
        jQuery.ajax({
            url: '/static.json',
            success: function(data) {
                this.addBlog(data);
            }.bind(this),
            error: function(){

            }

        })
    };

    window.app = window.app || {};
    window.app.site = new SITE();
    jQuery(document).ready(function(){
        window.app.site.init();
    }.bind(this));

}());
