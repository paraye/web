let slideIndex =1 ;
function setslide(input,index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slides =[...document.querySelector('.slides').children] ;
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    item.classList.add('active');    
}

setInterval(()=>{
    slideIndex +=1;
   if(slideIndex==4){
    slideIndex=1
   }
   setslide(`slide${slideIndex}` , slideIndex)
} , 4000)