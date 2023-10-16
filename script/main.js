function showNavbarDropDown(){
  $('.drdn-menu').toggleClass('active');
}
function hideNavbarDropDown(){
  $('.drdn-menu').removeClass('active');
}

function goto(link){
  window.location.replace(link);
}

function smoothScroll(e){
  let isDownMove= e.originalEvent.deltaY >= 0;
  let winHeight = window.innerHeight;
  let scrollPosition=$(window).scrollTop();
  let sectionNum = parseInt(Math.floor((scrollPosition+10)/winHeight))
  // console.log(winHeight);
  let pageBottom=document.body.scrollHeight-winHeight-10;
  if(scrollPosition>pageBottom){
    sectionNum+=1;
  }
  console.log(pageBottom);
  console.log(scrollPosition);
  console.log(sectionNum);
  if(isDownMove){
    window.scrollTo(0,(sectionNum+1)* winHeight);
  }else{
    window.scrollTo(0, (sectionNum-1)* winHeight);
  }
}

function transparenteNavBar(scrollPosition){
  let navbar= $(".main-navbar .nav-bottom")[0]
  if(scrollPosition>10 ){
    navbar.classList.add('solid-bg');
  }else{
    navbar.classList.remove('solid-bg');
  }
}

let cardIndex=0;
let playAnimation=true;

function animateCards(){
  if(playAnimation){
    const cards=$(".cards .card");
    const len=cards.length;
    if(len===1){
      cards[cardIndex].classList.add("active");
      return;
    }
    let previus= (cardIndex-1 +len)%len;
    cards[cardIndex].classList.add("active")
    cards[previus].classList.remove("active")
    cardIndex=(cardIndex+1)%len;
  }
}


$(document).ready(function(){
  cardIndex=0;

  $('.drdn-menu').mouseleave(function(){ 
    hideNavbarDropDown();
  });

  $(window).on('scroll',function(){
    let scrollPosition=$(window).scrollTop();
    transparenteNavBar(scrollPosition)
  });

  $(window).on('mousewheel',function(e){
    smoothScroll(e)
  });


  $(".cards .card").bind("mouseover",function(){
    playAnimation=false;
    const cards=$(".cards .card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("active")
    }
  })
  $(".cards .card").bind("mouseleave",function(){
    playAnimation=true;
  })
  setInterval(animateCards, 2000);
});
