var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 5000);
} 

function myDrop()
{
    var x = document.getElementById("myNav");
    var y = document.getElementById("myNavDrop");
    if (x.className === "navtop" && y.className === "navtopdrop") {
        x.className += " resp";
        y.className += " resp";
    } else {
        x.className = "navtop";
        y.className = "navtopdrop";
    }
}