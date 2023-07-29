window.onload = function loadpage() {
  const menueBtn = document.querySelector('#menueShow');
  const menueCancelBtn = document.querySelector('#menueCancle');
  const menueNavBar = document.querySelector('#navbar');
  const menueItem = document.querySelectorAll('.navitem');

  const msgform = document.querySelector('#msgform');
  const fullNameInp = document.querySelector('#fullName');
  const textbodyInp = document.querySelector('#txtBody');
  const submitBtn = document.querySelector('#submitBtn');
  const emailInp = document.querySelector('#emailInp');
  let formData = {
    fullname: localStorage.getItem('formData.fullname'),
    email: localStorage.getItem('formData.fullname'),
    textbody: localStorage.getItem('formData.fullname'),
  };

  formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    fullNameInp.value = formData.fullname;
    emailInp.value = formData.email;
    textbodyInp.value = formData.textbody;
  }

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
  for (let i = 0; i < projects[0].proTechs.length; i += 1) {
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
        <button id="project0" class="buttn" type="button">See project</button>
      </div>
    </div>`;

  for (let i = 1; i < projects.length; i += 1) {
    techs = '';
    for (let t = 0; t < projects[i].proTechs.length; t += 1) {
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
          <button id="project${i}" class="butn" type="button">See project</button>
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

  // function shosho() {
  //   alert(this.id);
  // }

  function showPopupModal() {
    let pN = this.id.slice(-1); // get pN (project number) to select it from projects list
    let projTech = '';
    projects[pN].proTechs.forEach((element) => {
      projTech += `<li><a href="#">${element}</a></li>`;
    });

    let popupModal = `
      <div id="dialogContainer" class="dialog-container">
        <div id="myworkDialog" class="mywork-dialog">
          <div id="dialogHeader" class="dialog-header">
            <span id="dialogTitle" class="dialog-title">${projects[pN].proName}</span>
            <a id="dialogCancel" class="dialog-cancel"><img src="/images/Icon-Cancel.svg" /></a>
          </div>
          <ul id="dialogTags" class="dialog-tags">
          ${projTech}
          </ul>
          <div id="imageDescBtns" class="image-desc-btns">
            <div id="dialogFtImage" class="dialog-feature-image">
              <img class="dialog-img" src="${projects[pN].proImage}" class="dialog-img">
            </div>
            <div id="descBtns" class="desc-btns">
              <p class="dialog-desc">
              ${projects[pN].proDesc}
              </p>
              <div class="dialog-btn">
                <a class="live-btn" href="${projects[pN].liveLink}">
                  <span>See Live</span> <span class="btn-icon1"></span>
                </a>
                <a class="source-btn" href="${projects[pN].sourceLink}">
                  <span>See Source</span> <span class="btn-icon2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    document.body.innerHTML += popupModal;
    document.querySelector('#dialogContainer').style.display = 'flex';
    document.querySelector('#bgblur').style.display = 'block';
    modalClose.addEventListener('click', closePopup);
  }
  let modalClose = document.querySelector('#dialogCancel');
  let projectId = document.querySelectorAll('[id^="project"]');
  projectId.forEach((el) => {
    el.addEventListener('click', showPopupModal);
  });

   function closePopup() {
    document.querySelector('#dialogContainer').style.display = 'none';
  document.querySelector('#bgblur').style.display = 'none';
  }

  

  // validator
  function validator(e) {
    e.preventDefault();
    if (emailInp.value === emailInp.value.toLowerCase()) {
      msgform.submit();
    } else {
      const notifyMsg = document.createElement('div');
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
  function saveData() {
    formData = {
      fullname: fullNameInp.value,
      email: emailInp.value,
      textbody: textbodyInp.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  }
  msgform.addEventListener('change', saveData);
};