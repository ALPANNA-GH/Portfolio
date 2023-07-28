window.onload = function () {
  const menueBtn = document.querySelector('#menueShow');
  const menueCancelBtn = document.querySelector('#menueCancle');
  const menueNavBar = document.querySelector('#navbar');
  const menueItem = document.querySelectorAll('.navitem');

  let msgform = document.getElementById('msgform');
  let fullNameInp = document.getElementById('fullName');
  let textbody = document.getElementById('txtbody');
  let submitBtn = document.getElementById('submitBtn');
  let emailInp = document.getElementById('emailInp');
  let formData = {
    fullname: localStorage.getItem('fullname'),
    email: localStorage.getItem('email'),
    textbody: localStorage.getItem('textbody'),
  };
  
  fullNameInp.value = formData.fullname;
  emailInp.value = formData.email;
  textbody.value = formData.textbody;

  const projects = [
    {
      proName: 'Multi-Post Stories',
      proDesc: `A daily selection of privately personalized reads; 
                no accounts or sign-ups required. has been the industry's 
                standard dummy text ever since the 1500s, 
                when an unknown printer took a standard dummy text.`,
      proImage: '../images/placeholder.svg',
      proTechs: ['CSS', 'HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.github.com/proj1',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Profesional Art Printing Data More',
      proDesc: `A daily selection of privately personalized reads; no accounts or sign-ups required.'
                Has been the industry's standard.`,
      proImage: '../images/Imgholder.svg',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.github.com/proj1',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Data Dashboard Healthcare',
      proDesc: `A daily selection of privately personalized reads; no accounts or sign-ups required.'
                Has been the industry's standard.`,
      proImage: '../images/bgPlaceholder1.png',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.proj1.com',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Website Portfolio',
      proDesc: `A daily selection of privately personalized reads; no accounts or sign-ups required.
                Has been the industry's standard.`,
      proImage: '../images/bgPlaceholder2.png',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.proj1.com',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Profesional Art Printing Data More',
      proDesc: `A daily selection of privately personalized reads; no accounts or sign-ups required.
                Has been the industry's standard.`,
      proImage: '../images/Imgholder.svg',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.github.com/proj1',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Data Dashboard Healthcare',
      proDesc: `A daily selection of privately personalized reads; no accounts or sign-ups required.'
                Has been the industry's standard.`,
      proImage: '../images/bgPlaceholder1.png',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.proj1.com',
      sourceLink: 'http://www.proj1.com',
    },
    {
      proName: 'Website Portfolio',
      proDesc: `A daily selection of privately personalized reads; no accounts or sign-ups required.'
                Has been the industry's standard.`,
      proImage: '../images/bgPlaceholder2.png',
      proTechs: ['HTML', 'Boostrab', 'Ruby'],
      liveLink: 'http://www.proj1.com',
      sourceLink: 'http://www.proj1.com',
    },
  ];

  let techs = '';
  for (let i = 0; i < projects[0].proTechs.length; i++) {
    techs += `<li><a href="#"> ${projects[0].proTechs[i]}</a></li>`;
  }

  let sectionHTML = `<div class="item recent-work">
      <h2 class="maintitle"> My Recent Work</h2>
      <img class="seperator" src="./images/lineseperator.png" />
    </div>
    <div class="item multi-post">
      <div class="mp-img">
        <img src="${projects[0].proImage}" alt="placeholder" />
      </div>
      <div class="mp-txt">
        <h2 class="secondry">${projects[0].proName}</h2>
        <p>
        ${projects[0].proDesc}
        </p>
        <ul class="mp-list">
        ${techs}
        </ul>
        <button class="buttn" type="button">See project</button>
      </div>
    </div>`;

  for (let i = 1; i < projects.length; i++) {
    techs = '';
    for (let t = 0; t < projects[i].proTechs.length; t++) {
      techs += `<li><a href="#"> ${projects[i].proTechs[t]}</a></li>`;
    }

    sectionHTML += `
      <div class="item bgmask" style="background-image: url('${projects[i].proImage}')">
        <div>
          <h2 class="secondry">${projects[i].proName}</h2>
          <p>
            ${projects[i].proDesc}
          </p>
          <ul>
            ${techs}
          </ul>
          <button class="butn" type="button">See project</button>
        </div>
      </div>
      `;
  }

  document.getElementById('mywork').innerHTML += sectionHTML;

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

  // validator
  function validator(e) {
    e.preventDefault();
    if (emailInp.value === emailInp.value.toLowerCase()) {
      msgform.submit();
    } else {
      let notifyMsg = document.createElement('div');
      notifyMsg.id = 'notify';
      notifyMsg.className = 'notify-msg';
      notifyMsg.style.display = 'block';
      notifyMsg.innerText = 'Email is not lower case';
      msgform.appendChild(notifyMsg);
      setTimeout(() => {
        notifyMsg.style.display = 'none';
      }, 5000);
    }
  }

  submitBtn.addEventListener('click', validator, false);

  //  storeData




};