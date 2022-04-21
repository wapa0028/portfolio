//nav

console.log('connected')

console.log(document.querySelector('.dropdown'))
let dropdown = document.querySelector('.dropdown')

dropdown.style.background = 'blanchedalmond'

dropdown.addEventListener("click", () => {
 dropClick()
})

function dropClick(){
    let nav = document.querySelector('nav')
    let header = document.querySelector('header')
    header.classList.toggle('showHeader')

    if(nav.classList.contains('reveal')){
        setTimeout(() => {
            nav.classList.toggle('hidden')
        }, 1000)
    }else{
        nav.classList.toggle('hidden')
    }


    setTimeout(() => {
        nav.classList.toggle('reveal')
    }, 50)
}
//nav end 

/*
const intro= document.querySelector('.intro');
const video= intro.querySelector('video');
const text= intro.querySelector('h1');
//END section
const section = document.querySelector('section');
const end = section.querySelector('h1');
//scroll magic
const controller = new ScrollMagic.Controller();
//scenes
const scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElemnt: intro,
    triggerHook:0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos=e.scrollpos / 1000;
    console.log(scrollpos);
});

setInterval(()=> {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);
    video.currentTime = scrollpos;
}, 33.3);
*/
