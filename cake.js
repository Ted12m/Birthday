const blowing = new Audio('assets/blowing.mp3');
const HBD = new Audio('assets/HBD.mp3');

$(document).ready(function() {
    $(".candles").click(function() {
      blowing.play(); 
      HBD.play(); 
      $(".flame").animate({"opacity": 0}, "fast");
      $(".flame2").animate({"opacity": 0}, "fast");
      $(".flame3").animate({"opacity": 0}, "fast");
      $(".text").animate({ "top": -300, "opacity": 1 }, "fast");
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });
  });
});
