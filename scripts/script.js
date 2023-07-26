window.onload = function () {
  const menueBtn = document.querySelector('#menueShow');
  const menueCancelBtn = document.querySelector('#menueCancle');
  const menueNavBar = document.querySelector('#navbar');
  const menueItem = document.querySelectorAll('.navitem');
  const projects = [
    {
      proName: 'Profesional Art Printing Data More',
      proDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.'
                + " Has been the industry's standard.",
      proImage: '../images/bgPlaceholder.svg',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.github.com/proj1',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Data Dashboard Healthcare',
      proDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.'
              + " Has been the industry's standard.",
      proImage: '../images/bgPlaceholder1.png',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.proj1.com',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Website Portfolio',
      proDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.'
              + " Has been the industry's standard.",
      proImage: '../images/bgPlaceholder2.png',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.proj1.com',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Profesional Art Printing Data More',
      proDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.'
                + " Has been the industry's standard.",
      proImage: '../images/bgPlaceholder.svg',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.github.com/proj1',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Data Dashboard Healthcare',
      proDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.'
              + " Has been the industry's standard.",
      proImage: '../images/bgPlaceholder1.png',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.proj1.com',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Website Portfolio',
      proDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.'
              + " Has been the industry's standard.",
      proImage: '../images/bgPlaceholder2.png',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.proj1.com',
      sourceLink: 'http://www.proj1.com',
    },
];

  function showMenue() {
    menueNavBar.classList.replace('nav', 'nav-open');
    menueItem.forEach((elm) => {
      elm.classList.replace('btn-tog', 'tog-open');
    });
    menueBtn.classList.replace('btn', 'menue-open');
    menueCancelBtn.classList.replace('menue-cancel', 'menue-cancel-open');
  }

  function hideMenue() {
    menueNavBar.classList.replace('nav-open', 'nav');
    menueItem.forEach((elmnt) => {
      elmnt.classList.replace('tog-open', 'btn-tog');
    });
    menueBtn.classList.replace('menue-open', 'btn');
    menueCancelBtn.classList.replace('menue-cancel-open', 'menue-cancel');
  }

  menueBtn.addEventListener('click', showMenue);
  menueCancelBtn.addEventListener('click', hideMenue);
  menueItem.forEach((elmnt) => {
    elmnt.addEventListener('click', hideMenue);
  });
};