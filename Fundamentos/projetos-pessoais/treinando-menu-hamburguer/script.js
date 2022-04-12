const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.container-menu')

let menuOpen = false ;
let menuOn = false ;

menuBtn.addEventListener('click', () => {
if(!menuOpen && !menuOn) {
  menuBtn.classList.toggle('open');
  menuOpen = true;
  menuNav.classList.toggle('container-menu-on');
  let menuOn = true;
} else {
  menuBtn.classList.toggle('open');
  menuNav.classList.toggle('container-menu-on');
  menuOpen = false;
  let menuOn = false ;
}
});