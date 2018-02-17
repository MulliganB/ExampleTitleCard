$(".hover").mouseover(
   function () {
      $(".pillar").fadeIn();
      $(".Links").css({"margin-left" : "170px"});
   }
);
$(".hover").mouseleave(
  function () {
    $(".pillar").fadeOut();
    $(".Links").css({"margin-left" : "30px"});
  }
);
$(".pillar").mouseleave(
  function () {
    $(".pillar").fadeOut();
    $(".Links").css({"margin-left" : "30px"});
  }
);
$(".pillar").mouseover(function() {
    $(this).stop(true, true).show();
    $(".Links").css({"margin-left" : "170px"});
  });
