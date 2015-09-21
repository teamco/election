(function() {

    var SITE = function SITE() {

    };

    SITE.prototype.getCandidateTpl = function (opts) {
        return [
            '<div class="col-lg-4">',
                '   <div class="widget-head-color-box blue-bg p-lg text-center">',
                '       <div class="m-b-md">',
                '           <h2 class="font-bold no-margins">',
                '               Jeb Bush',
                '           </h2>',
                '           <small>Jeb Bush President</small>',
                '       </div>',
                '           <img src="img/jeb.jpg" class="img-circle circle-border m-b-md" alt="profile">',
                '       <div>',
                '           <span>100 Tweets</span> |',
                '           <span>350 Following</span> |',
                '           <span>610 Followers</span>',
                '       </div>',
                '   </div>',
                '   <div class="widget-text-box">',
                '      <h4 class="media-heading">Jeb Bush</h4>',
                "          <p>I'm Jeb Bush, and I'm asking for your support.</p>",
                '          <div class="text-right">',
                '              <a class="btn btn-xs btn-white"><i class="fa fa-thumbs-up"></i> Like </a>',
                '              <a class="btn btn-xs btn-primary"><i class="fa fa-heart"></i> Love</a>',
                '          </div>',
                '   </div>',
                '</div>'
            ].join('');
    };

    SITE.prototype.addCandidate = function() {
        var candidateItem = this.getCandidateTpl({
            name: "Jeb Bush",
            description: "Jeb Bush President",
            picture: "img/jeb.jpg"
        });
        jQuery('.test1').append(candidateItem);
    };

    SITE.prototype.init = function init() {
        var key, info;
        window.app.crud.getCandidate().done(function(data){
            console.log('>>>>>', data);
            for (key in data.candidates){
                info = data.candidates[key].candidateInfo;
                this.addCandidate();
            }

        }.bind(this));
    };

    window.app = window.app || {};
    window.app.site = new SITE();

}());
