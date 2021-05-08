const faders = document.querySelectorAll('.fade-in');

// fade in funcion for About section and project section=================
const appearOptions ={
    threshold:1,
    rootmargin:"0px 0px -100px 0px"
};
  
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
},appearOptions);
  
faders.forEach(fader =>{
    appearOnScroll.observe(fader);
}); 

  
// ============ skills fade function===========================
window.addEventListener('scroll',reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal')

    for(let i=0; i< reveals.length; i++){
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop< windowheight - revealpoint){
            reveals[i].classList.add('active')
        // }else{
        //     reveals[i].classList.remove('active')
        }
    }
}

// =============Click on icons to appear back of the cards=========
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const icon3 = document.querySelector('.icon3');
const icon4 = document.querySelector('.icon4');
const icon5 = document.querySelector('.icon5');
const icon6 = document.querySelector('.icon6');
const cardBack1 = document.querySelector('.card-back-1');
const cardBack2 = document.querySelector('.card-back-2');
const cardBack3 = document.querySelector('.card-back-3');
const cardBack4 = document.querySelector('.card-back-4');
const cardBack5 = document.querySelector('.card-back-5');
const cardBack6 = document.querySelector('.card-back-6');

function showCardBack(card,icon){
  card.classList.add('show');
  icon.style.zIndex = -1;
}

function hideCardBack(card,icon){
  card.classList.remove('show');
  icon.style.zIndex = 10;
}

icon1.addEventListener('click',function(){
  showCardBack(cardBack1,icon1);
})

cardBack1.addEventListener('click',function(){
  hideCardBack(cardBack1,icon1);
})

icon2.addEventListener('click',function(){
  showCardBack(cardBack2,icon2);
})

cardBack2.addEventListener('click',function(){
  hideCardBack(cardBack2,icon2);
})

icon3.addEventListener('click',function(){
  showCardBack(cardBack3,icon3);
})

cardBack3.addEventListener('click',function(){
  hideCardBack(cardBack3,icon3);
})

icon4.addEventListener('click',function(){
  showCardBack(cardBack4,icon4);
})

cardBack4.addEventListener('click',function(){
  hideCardBack(cardBack4,icon4);
})

icon5.addEventListener('click',function(){
  showCardBack(cardBack5,icon5);
})

cardBack5.addEventListener('click',function(){
  hideCardBack(cardBack5,icon5);
})

icon6.addEventListener('click',function(){
  showCardBack(cardBack6,icon6);
})

cardBack6.addEventListener('click',function(){
  hideCardBack(cardBack6,icon6);
})


// =====================Navbar responsive===========================
const navContainer = document.querySelector(".topnav");
const icon = document.querySelector(".icon-bar");
const topRight = document.querySelector(".topnav-right");

icon.addEventListener('click',function(){
  navContainer.classList.toggle("responsive");
})

topRight.addEventListener("click", ()=>{
  navContainer.classList.remove("responsive");
})






