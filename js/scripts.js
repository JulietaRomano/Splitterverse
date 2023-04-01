//preloader
// window.onload = function(){
//     $('#preloader').fadeOut();
//     $('#hidden').removeClass('hidden')
// }



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
  console.log(this);
console.log('current '+ current);
console.log('next '+next)

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



// let current_posicion= 1
// let a_time = Date.now();

//   window.addEventListener("wheel", event => {
//     let b_time = Date.now();
//     let difference = b_time-a_time

//     //Cuando bajo!!
//     if ((0<event.deltaY) &&(difference>1400)&& current_posicion<5){
//       console.log(event.deltaY)
//       console.log("baje")
//       current_posicion =  current_posicion + 1
//       console.log("Estaria en la posicion " + current_posicion)
//       a_time = Date.now();
      
      
//       let active = $(document.getElementsByClassName('active')[0]).data('slide');
//       console.log("active cuando bajo:" + active);
//         // e.preventDefault();
//         // get current slide
//         let aux = document.getElementsByClassName('slide-nav')[active];

//         var current = current_posicion,
//           // get button data-slide
//         next = $(aux).data('slide');
//         console.log("next:" + next);
//         $('.slide-nav').removeClass('active');
//         $(aux).addClass('active');
      
//         if (current === next + 1) {
//           return false;
//         } else {
//           $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
//           $('.flex--active').addClass('animate--end');
//           setTimeout(function() {
//             $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
//             $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
//           }, 800);
//         }
//     }

//       //Cuando subo!!
//       if ((0>event.deltaY) &&(difference>1400)&& current_posicion>1){
//       console.log("subi")
//       current_posicion =  current_posicion - 1
//       console.log("Estaria en la posicion " + current_posicion)
//       a_time = Date.now();
//       let active = $(document.getElementsByClassName('active')[0]).data('slide');
//       let g = $(document.getElementsByClassName('active'));
//       console.log(g);
//       console.log("active cuando subo:" + active);
//       let aux = document.getElementsByClassName('slide-nav')[active-2];
//       var current = current_posicion,
//         // get button data-slide
//       next = $(aux).data('slide');
//       console.log("next:" + next);
//       $('.slide-nav').removeClass('active');
//       $(aux).addClass('active');
    
//       if (current === next + 1) {
//         return false;
//       } else {
//         $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
//         $('.flex--active').addClass('animate--end');
//         setTimeout(function() {
//           $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
//           $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
//         }, 800);
//       }

//     }
    
//   });