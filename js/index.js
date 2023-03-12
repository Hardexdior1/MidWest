let ul =document.querySelector('.ul')
let menu=document.querySelector('.menu')
let header=document.querySelector('.header')
window.addEventListener('scroll',()=>{
    if(window.scrollY >650){
        header.style.position='fixed'
        header.style.left=0
        header.style.right=0
        header.style.transition='0.3s'
        header.classList.add('transition');
    }
    else{
        header.style.position=''
    }
})
menu.addEventListener('click',()=>{
    ul.classList.toggle('active')
    menu.style.border='1px solid grey'
})
