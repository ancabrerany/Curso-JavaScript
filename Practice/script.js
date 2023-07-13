const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafoClass = document.getElementsByClassName('parrafoClass');
const parrafoId = document.getElementById('parrafoId');
const input = document.querySelector('input');

console.log(h1);
console.log({
  h1,
  p,
  parrafoClass,
  parrafoId,
  input,
});

h1.innerText = "NCT 127";

h1.classList.add("rojo");
h1.classList.add("verde");
h1.classList.remove("rojo");

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/13282615/pexels-photo-13282615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

parrafoId.append(img);

