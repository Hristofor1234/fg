const slider=document.querySelector('.slider');
const sliderImages=document.querySelectorAll('.slider__img');
const sliderLine= document.querySelector('.slider__line');

const next=document.querySelector('.next');
const prev=document.querySelector('.prev');

let sliderCount=0;
let sliderWidth= slider.offsetWidth;

next.addEventListener('click',nextSlide);

prev.addEventListener('click',prevSlide);

function nextSlide(){
    sliderCount++;
    if(sliderCount>=sliderImages.length){
        sliderCount=0;
    }
    rollSlider();
}
function prevSlide(){
    sliderCount--;
    if(sliderCount<0){
        sliderCount=sliderImages.length-1;
    }
    rollSlider();
}
function rollSlider(){
    sliderLine.style.transform=`translateX(${-sliderCount*sliderWidth}px)`;
}


    

// авто свап слайдов
setInterval(()=>{nextSlide()},3000);



const burgericon=document.querySelector("#burger-icon");
const closeicon=document.querySelector("#close-icon");
const menu=document.querySelector("#menu");

console.log(burgericon);
console.log(closeicon);
console.log(menu);

burgericon.addEventListener("click",function(){
    menu.style.right="820px";
    
});
closeicon.addEventListener("click",function(){
    menu.style.right="-100%";
});
document.addEventListener("click",function(event){
    if(!menu.contains(event.target)&&event.target!==burgericon){
        menu.style.right="-100%";
    }
});
window.addEventListener("resize",function(){
    if(window.innerWidth>768){
        menu.style.right="-100%";
    };
});

