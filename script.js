let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slidingEl = document.querySelectorAll('.slide-container');
let count = 0;

function next(){
 slidingEl[count].classList.remove('active');
  count = (count + 1) % slidingEl.length;
 slidingEl[count].classList.add('active');
}

function prev(){
 slidingEl[count].classList.remove('active');
  count = (count - 1 + slidingEl.length) % slidingEl.length;
 slidingEl[count].classList.add('active');
}
