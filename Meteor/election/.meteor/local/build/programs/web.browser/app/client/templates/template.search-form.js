(function(){
Template.__checkName("SearchForm");
Template["SearchForm"] = new Template("Template.SearchForm", (function() {
  var view = this;
  return HTML.Raw('<form role="search" class="navbar-form-custom" method="post" action="#">\n        <div class="form-group">\n            <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">\n        </div>\n    </form>');
}));

}).call(this);
