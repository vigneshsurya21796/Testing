const input1 = document.querySelector('.Wrapper');
const input2 = document.querySelector('.Close');
const input3 = document.querySelector('.Menu');
const input4 = document.querySelector('.itemvalue');
const input5 = document.querySelector('.down-icon');
const input6 = document.querySelector('.toggle-wrapper');
const input7 = document.querySelector('.icon-down');
const input8 = document.querySelector('.toggle_1-wrapper');
const input9 = document.querySelector('.icon-down_1');

function clicevent() {
  console.log('cliked');
  input1.classList.remove('display');
  input3.classList.add('display');

  // input3.classList.add('condition');
}
function remove() {
  input1.classList.add('display');
  //   console.log('cliked');
  // input2.classList.add('condition');
  input3.classList.remove('display');
}
function toggle() {
  input4.classList.toggle('none');
  input5.classList.toggle('rotate');
  //   console.log('cliked');
  // input2.classList.add('condition');
  // input3.classList.remove('condition');
}
function toggle_1() {
  input6.classList.toggle('display');
  input7.classList.toggle('icon-down-1');

  if (!input7.classList.contains('icon-down-1')) {
    input7.classList.toggle('icon-down-2');
  }
  if (input7.classList.contains('icon-down-1')) {
    input7.classList.remove('icon-down-2');
  }
}

function toggle_2() {
  input8.classList.toggle('display');
  input9.classList.toggle('icon-down-1');

  if (!input9.classList.contains('icon-down-1')) {
    input9.classList.toggle('icon-down-2');
  }
  if (input9.classList.contains('icon-down-1')) {
    input9.classList.remove('icon-down-2');
  }
}
