const navList = document.querySelector('.nav-list');
const burger = document.querySelector('.burger');
const spanArray = document.querySelectorAll('.span');
const navBackground = document.querySelector('.nav');


function openMenu() {
  navList.classList.toggle('_active');
  navBackground.classList.toggle('_active');
  for(let i = 0; i < spanArray.length; i++) {
    spanArray[i].classList.toggle('_active');
  }
  
}

burger.addEventListener("click", openMenu);
navBackground.addEventListener("click", openMenu);