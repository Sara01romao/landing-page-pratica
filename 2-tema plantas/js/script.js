const menu= document.querySelector('.iconMenu');

const navMenu=document.querySelector('.nav-menu');


menu.addEventListener("click", function(){
      navMenu.classList.add('active')
     
     
})


document.querySelector('.closeMenu').addEventListener("click", function(){
  navMenu.classList.remove('active')
})
