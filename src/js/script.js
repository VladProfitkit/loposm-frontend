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

  //мобильное меню:
  const mobileMenuToggle = $('.header__mobile-menu-toggle');
  const mobileMenu = $('.header__mobile-nav');
  const html = $('html');
  const mobileSubMenuToggles = $('.header__mobile-parent-toggle');
  const closeMobileMenuBtn = $('.header__mobile-menu-close');
  const mobileMenuOverlay = $('.header__mobile-menu-overlay');
  const closeMobileMenu = function () {
    mobileMenu.removeClass('active');
    mobileMenu.find('.active').removeClass('active');
    mobileMenuOverlay.removeClass('active')
    html.removeClass('modal-open');
  };

  mobileMenuToggle.click(function (e) {
    e.preventDefault();
    mobileMenu.toggleClass('active');
    mobileMenuOverlay.toggleClass('active');
    html.toggleClass('modal-open');
  });

  mobileSubMenuToggles.each(function () {
    $(this).click(function () {
      $(this).toggleClass('active');
      $(this).parent().next().toggleClass('active');
    });
  });

  closeMobileMenuBtn.click(function () {
    closeMobileMenu();
  });

  mobileMenuOverlay.click(function () {
    closeMobileMenu();
  });

  //слайдер в шапке:
  const mainSlider = $('.main-slider__slides');

  mainSlider.slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
  });

  //слайдер партнеров на главной:
  const partnersSlider = $('.index-partners__slider');

  partnersSlider.slick({
    // arrows: true,
    prevArrow: '<button class="index-partners__slider-btn index-partners__slider-btn--prev"></button>',
    nextArrow: '<button class="index-partners__slider-btn index-partners__slider-btn--next"></button>',
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $(window).resize(function () {
    if ($(window).width() > 767) {
      closeMobileMenu();
    };
  });
});
