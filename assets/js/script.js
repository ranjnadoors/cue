

var swiper = new Swiper('.swiper-container', {
 
  direction: 'vertical',
  mousewheelControl: true,
  speed: 500,
  simulateTouch : true
 
  
});

console.log(swiper.realIndex)

window.addEventListener("keydown", playNextSlide);
window.addEventListener("keyup", playPreSlide);
window.addEventListener("mousewheel", mousefun);


document.getElementById("navbar").style.top = "-58px";


function mousefun(e){
  runAnmations()
  console.log("active--->mouse",swiper.activeIndex)
  if (swiper.activeIndex != 0 ) {
      document.getElementById("navbar").style.top = "0";
  } else {
      document.getElementById("navbar").style.top = "-58px";
  }
  
 
}

function playNextSlide(e){
  runAnmations()
  if(e.keyCode == 40) {
    e.preventDefault();
    swiper.slideNext();

    console.log("active--->40 ",swiper.activeIndex)
    if (swiper.activeIndex != 0) {
      document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-58px";
    }

  }
}

function playPreSlide(e){
  runAnmations()
  if(e.keyCode == 38) {

  e.preventDefault();
  swiper.slidePrev();
    console.log("active--->38",swiper.activeIndex)
    if (swiper.activeIndex != 0 ) {
      document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-58px";
    }

  }
}

function onScroolArrow(){
  swiper.slideNext();
  runAnmations()
 
 document.getElementById("navbar").style.top = "0";
}


function runAnmations(){
  if(swiper.activeIndex == 1 ){
    $(".box").addClass("box-2");
  }
  if(swiper.activeIndex == 2 ){
    $(".blackox-ani-1").addClass("black-box");
  }
  if(swiper.activeIndex == 3 ){
    $(".blackox-ani-2").addClass("blackbox-1");
    $(".blackox-ani-3").addClass("blackbox-2");
    $(".blackox-ani-4").addClass("blackbox-3");
  }
  if(swiper.activeIndex == 4 ){
    $(".blackox-ani-5").addClass("first-para");
  }
  if(swiper.activeIndex == 5 ){
    $(".blackox-ani-6").addClass("update-text");
  }
}


