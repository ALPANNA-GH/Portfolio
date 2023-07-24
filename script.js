const menueBtn = document.querySelector('#menueShow');
const menueCancelBtn = document.querySelector('#menueCancle');
const menueNavBar = document.querySelector('#navbar');
const menueItem = document.querySelectorAll('.btn-tog');

function showMenue() {
  menueNavBar.classList.replace('nav', 'nav-open');
  menueItem.classList.add('tog-open');
  menueBtn.classList.toggle('menue-cancel menue-cancel-open');
  menueCancelBtn.classList.toggle('btn menue-open');
}

function hideMenue() {
  menueNavBar.classList.replace('nav-open', 'nav');
  menueItem.classList.remove('tog-open');
  menueBtn.classList.toggle('menue-cancel menue-cancel-open');
  menueCancelBtn.classList.toggle('btn menue-open');
}

menueBtn.addEventListener('click', showMenue);
menueCancelBtn.addEventListener('click', hideMenue);