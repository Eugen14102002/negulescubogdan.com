$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 20){
          $(".navbar").addClass("sticky");
       }else{
          $(".navbar").removeClass("sticky")
      }
    })
});
// toggle menu\navbar scrip

$('.menu-btn').click(function(){
   $('.navbar .menu').toggleClass("active");
   $('.menu-btn i').toggleClass("active");
   
  });
  //  owlCarousel
$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive:{
    0:{
      items: 1,
      nav: false,
    },
    600:{
     items: 2,
     nav: false,
   },
   1000:{
     items: 3,
     nav: false,
   }
  }
});

$('.carousel').owlCarousel({

});
//Get the button:
mybutton = document.getElementById("myBtn");

//When someone scrolls down 20px from top = show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the button is clicked, go to top (home page)
function topFunction() {
  document.documentElement.scrollTop = 0; 
}

//Typing animation scroll
var typed = new Typed(".typing",{
   strings: ["Despre masinile de lux.","Despre masinile electrice.","Despre masinile din ziua de azi."],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true 
});








