$(document).ready(function () {
  //главное меню:
  const mainSubMenu = $('.header__main-submenu');
  const submenuLinks = $('.header__main-submenu-link')

  mainSubMenu.each(function () {
    $(this).mouseenter(function () {
      $(this).siblings('.header__main-menu-link--parent').addClass('active');
      if ($(this).parent().hasClass('header__main-submenu-item--parent')) {
        $(this).siblings('.header__main-submenu-link--parent').addClass('active');
      };
    });

    $(this).mouseleave(function () {
      $(this).siblings('.header__main-menu-link--parent').removeClass('active');
      if ($(this).parent().hasClass('header__main-submenu-item--parent')) {
        $(this).siblings('.header__main-submenu-link--parent').removeClass('active');
      };
    });
  });

  submenuLinks.each(function () {
    if ($(this).parent().parent().parent().hasClass('header__main-submenu-item--parent')) {
      $(this).focus(function () {
        $(this).parent().parent().parent().children('.header__main-submenu-link--parent').addClass('active');
      });

      $(this).blur(function () {
        $(this).parent().parent().parent().children('.header__main-submenu-link--parent').removeClass('active');
      });
    };
  });


  //слайдер в шапке:
  const mainSlider = $('.');
});
