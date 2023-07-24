let menueBtn = document.querySelector('#menueShow');
let menueCancelBtn = document.querySelector('#menueCancle');
let menueNavBar = document.querySelector('#navbar');
let menueItem = document.querySelectorAll('.navitem');

function showMenue() {
  // menueNavBar.classList.replace('nav', 'nav-open');
  // menueItem.classList.toggle('btn-tog tog-open');
  // menueBtn.classList.toggle('btn menue-open');
  // menueCancelBtn.classList.toggle('menue-cancel menue-cancel-open');
  alert('workings');
}

function hideMenue() {
  menueNavBar.classList.replace('nav-open', 'nav');
  menueItem.classList.toggle('btn-tog tog-open');
  menueBtn.classList.toggle('btn menue-open');
  menueCancelBtn.classList.toggle('menue-cancel menue-cancel-open');
}

menueBtn.addEventListener('click', showMenue);
menueCancelBtn.addEventListener('click', hideMenue);