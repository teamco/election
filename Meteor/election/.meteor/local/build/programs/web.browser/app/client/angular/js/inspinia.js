(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/angular/js/inspinia.js                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/**                                                                    //
 * INSPINIA - Responsive Admin Theme                                   //
 * 2.0                                                                 //
 *                                                                     //
 * Custom scripts                                                      //
 */                                                                    //
                                                                       //
$(document).ready(function () {                                        // 8
                                                                       //
    // Full height of sidebar                                          //
    function fix_height() {                                            // 12
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;  // 13
        $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
                                                                       //
        var navbarHeigh = $('nav.navbar-default').height();            // 16
        var wrapperHeigh = $('#page-wrapper').height();                // 17
                                                                       //
        if (navbarHeigh > wrapperHeigh) {                              // 19
            $('#page-wrapper').css("min-height", navbarHeigh + "px");  // 20
        }                                                              //
                                                                       //
        if (navbarHeigh < wrapperHeigh) {                              // 23
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }                                                              //
    }                                                                  //
                                                                       //
    $(window).bind("load resize scroll", function () {                 // 29
        if (!$("body").hasClass('body-small')) {                       // 30
            fix_height();                                              // 31
        }                                                              //
    });                                                                //
                                                                       //
    // Move right sidebar top after scroll                             //
    $(window).scroll(function () {                                     // 36
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');               // 38
        } else {                                                       //
            $('#right-sidebar').removeClass('sidebar-top');            // 40
        }                                                              //
    });                                                                //
                                                                       //
    setTimeout(function () {                                           // 44
        fix_height();                                                  // 45
    });                                                                //
});                                                                    //
                                                                       //
// Minimalize menu when screen is less than 768px                      //
$(function () {                                                        // 51
    $(window).bind("load resize", function () {                        // 52
        if ($(this).width() < 769) {                                   // 53
            $('body').addClass('body-small');                          // 54
        } else {                                                       //
            $('body').removeClass('body-small');                       // 56
        }                                                              //
    });                                                                //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
