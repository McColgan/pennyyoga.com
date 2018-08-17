$(document).ready(function(){
  $(window).scroll(function(){
    parallax();
    linkSwitching();
  });

 // Checking to see if screen width matches media query for desktop header
 let screenWidth = window.matchMedia( "(min-width: 1000px)" );

  // Smooth Scrolling
  var scrollLink = $('.scroll');
  scrollLink.click(function(e){
    e.preventDefault();
    if (screenWidth.matches){
      $('body,html').animate({
        //scrollTop: $(this.hash).offset().top - $('#header-container').outerHeight()
        scrollTop: $(this.hash).offset().top
      }, 1500);
    } else{
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top - $('#header-container').outerHeight()
      }, 1500);
    }
    });
    // Nav-Icon Animation
  $('#nav-icon').click(function(){
    $('.site-nav').toggleClass('site-nav--open', 400);
    $(this).toggleClass('open');
  });

  // Parallax Effect
  /* function parallax(){
    var wScroll = $(window).scrollTop();
    
    $('.showcase-outer').css('background-position', 'center '+(wScroll*0.5)+'px');
  } */
  // Link Switching
  function linkSwitching(){
    var scrollBarLocation = $(this).scrollTop();
    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top -140;
      if (sectionOffset <= scrollBarLocation){
        $(this).parent().addClass('activelink');
        $(this).parent().siblings().removeClass('activelink');
      }
    });
  }
  function parallax(){
    var wScroll = $(window).scrollTop();
    $('.showcase-bg').css('top',(wScroll * 0.04)+'em');
  }

  // Hiding header on scroll
  let prevScrollPos = window.pageYOffset;
  
  
  if (screenWidth.matches){
       window.onscroll = function(){
          let currentScrollPos = window.pageYOffset;
          if (prevScrollPos > currentScrollPos){
              document.getElementById("header-container").style.top = "0";
          } else{
              document.getElementById("header-container").style.top = "-90px";
          }
      
          prevScrollPos = currentScrollPos;
          }
      }

});