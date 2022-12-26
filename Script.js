const input1 = document.querySelector('.Wrapper');
const input2 = document.querySelector('.Close');
const input3 = document.querySelector('.Menu');
const input4 = document.querySelector('.itemvalue');
const input5 = document.querySelector('.down-icon');
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
function toggle() {
  input4.classList.toggle('none');
  input5.classList.toggle('rotate');
  //   console.log('cliked');
  // input2.classList.add('condition');
  // input3.classList.remove('condition');
}
