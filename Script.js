const input1 = document.querySelector('.wrapper');
const input2 = document.querySelector('.input');
const input3 = document.querySelector('.search');

function clicevent() {
  console.log('cliked');
  input2.classList.remove('condition');
  input3.classList.add('condition');
}
function remove() {
//   console.log('cliked');
  input2.classList.add('condition');
  input3.classList.remove('condition');
}
