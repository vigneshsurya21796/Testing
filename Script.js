const input1 = document.querySelector('.Wrapper');
const input2 = document.querySelector('.Close');
const input3 = document.querySelector('.Menu');

function clicevent() {
  console.log('cliked');
  input1.classList.remove('none');
  // input3.classList.add('condition');
}
function remove() {
  input1.classList.add('none');
  //   console.log('cliked');
  // input2.classList.add('condition');
  // input3.classList.remove('condition');
}
