
$(document).ready(function(){
    $('html,body').scrollTop(0);
  });


//navbar
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// animation botones


var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('mouseover', animateButton, false);
  }



// Personajes



$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');
  

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');


    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});



//Capitulos


function pagination() {
  var offset = $(document).scrollTop();
  var windowHeight = $(window).height();
  var currentPage = Math.ceil(offset / windowHeight);

  for (var i = 1; i <= 42; i++) {
    var pageClass = '.current-page' + i;

    if (i === currentPage) {
      $(pageClass).removeClass('link-noactive').addClass('link-active');
    } else {
      $(pageClass).removeClass('link-active');
    }
  }
}

pagination();

$(document).on('scroll', pagination);

$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});












document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.botonera_slider-container');
    const prevButton = document.querySelector('.btn-pag_prev');
    const nextButton = document.querySelector('.btn-pag_next');
    const totalSlides = 2; // Número total de slides
    let currentSlide = 1;

    function updateSlide() {
        slides.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        if (currentSlide > 1) {
            currentSlide--;
            updateSlide();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentSlide < totalSlides) {
            currentSlide++;
            updateSlide();
        }
    });
});
