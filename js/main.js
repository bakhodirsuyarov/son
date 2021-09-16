let elResault = [];

const elForm = document.querySelector('.js-form');
const elInput = elForm.querySelector('.js-input');
const elButton = elForm.querySelector('.js-button');
const elList = document.querySelector('.js-list')
const elTitle = document.querySelector('.title');

elForm.addEventListener('submit', function(e){
  e.preventDefault();


  if (elInput.value < 0){
    let raqam = Math.round(elInput.value * -1)

    elResault.push(raqam)

    elTitle.textContent = elResault
    // console.log(elResault)
  }
  elInput.value = ''

});
