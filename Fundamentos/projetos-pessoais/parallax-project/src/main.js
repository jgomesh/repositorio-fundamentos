const clouds = document.getElementById('clouds');
const sun = document.getElementById('sun');
const montain = document.getElementById('montain');
const forest = document.getElementById('forest');
const btn = document.getElementById('btn');
const text = document.getElementById('text');

window.addEventListener('scroll', function(){
  let value = this.window.scrollY;
  clouds.style.left = value * 0.25 + 'px';
  sun.style.top = value * 0.7 + 'px';
  montain.style.top = (value + 300) * 0.3 + 'px';
  forest.style.top = value * 0 + 'px';
  text.style.right = (value + 1950)* 0.25 + 'px';
  btn.style.right = (value + 1950)* 0.25 + 'px';
})