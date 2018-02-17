var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dot = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    $(dot[i]).removeClass('active').addClass("non-active");
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1;}
  x[slideIndex-1].style.display = "block";
  $(dot[slideIndex-1]).removeClass("non-active").addClass("active");
  var timeout = setTimeout(carousel, 10000); // Change image every 10 seconds

  $(".dot1").click (function () {
    clearTimeout(timeout);
    slideIndex = 0;
  });
  $(".dot2").click (function () {
    clearTimeout(timeout);
    slideIndex = 1;
  });
  $(".dot3").click (function () {
    clearTimeout(timeout);
    slideIndex = 2;
  });
}
