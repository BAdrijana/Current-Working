let animation = document.querySelector('#logo path ');
let svg = document.querySelector('.svg-wraper');
let page = document.querySelector('.page-wraper');
// console.log(animation);


   animation.addEventListener('animationend', function() {
      console.log('Animation finished');
      svg.style.display = 'none';
      page.style.display="block";

      })

// RESPONSIVE MENU
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.5s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.5s ease-out';
    }
});

// Toggle Menu Icon 
let toggleIcon = document.querySelector('.menuIcon');
const navLinks = document.querySelectorAll('.nav a');


toggleIcon.addEventListener('click', togglerClick);
navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));

// Toggler Click Icon
function togglerClick () {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
};

// navLinkClick function
function navLinkClick() {
    if(toggleIcon.classList.contains('toggle')) {
        toggleIcon.click();
    }
  }
//   Add event on Scroll for Nav
window.addEventListener("scroll", function(){
    let nav = document.querySelector(".nav");
    let navig = document.querySelector("#navbar");
    nav.classList.toggle("sticky", window.scrollY > 0 );
    navig.classList.toggle("sticky", window.scrollY > 0 );
})

// ABOUT CONTENT
if($("#profile").hasClass('active')){
  $(".profile").show();
}
$('.switch').click(function() {
    
    var $el = $('.' + this.id).show();
    console.log($el);
    $(".item").not($el).hide();
    $('.switch').removeClass('active');
    $(this).addClass('active');
  });






// OPEN VIDEO

$(".video").css({
    "width"  : $(".player").css("width"),
    "height" : $(".player").css("height")
  });
  
  $("#video-btn").click(function() {
    $(".video-wrapper").fadeIn('fast', function() {
      $(".video").fadeIn(); 
      $(".video").center(); 
    });
        
  });
  
  $(".video-wrapper").click(function(e) {
    if($(e.target).is(".video-wrapper")) {
      $(".video").fadeOut(function() {
        $(".video-wrapper").fadeOut(function() {
         $(".video, .video-wrapper").css({'display':'none'}); 
          var src=$("#player").attr("src");
          $(".player").attr("src", "");
          $(".player").attr("src", src);
        });
      });
    }
  });
  
  $(document).keyup(function(e) {
    var isShown=$(".video-wrapper").css("display");
    
    if(isShown !== "none" && e.which==27) {
       $(".video-wrapper").click(); 
    }
    
  });
  
  $(".video-btn").on('click', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
  $(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-main").removeClass('model-open');
  });