$(function () {
    $("nav .navbar-collapse > ul.nav.navbar-left > li").on({
        mouseover:function () {
          $(this).children(".nav-bg").addClass("current");
        },
        mouseout:function () {
          $(this).children(".nav-bg").removeClass("current");
        }
    });
});