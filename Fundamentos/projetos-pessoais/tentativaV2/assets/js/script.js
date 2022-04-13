// MOSTRE O MENU
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Validade

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  })
};

// MENU HIDDEN

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  })
};

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // QUANDO CLICAMOS NO NAV LINK REMOVEMOS A SHOW MENU CLASS
  navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

// ABRE E FECHA SKILLS

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;
  if (itemClass === 'skills__content skills__open') {
    this.parentNode.className = 'skills__content skills__close';
  } else {
    this.parentNode.className = 'skills__content skills__open';
  }
};

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

// QUALIFICATION TABS

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    });

    target.classList.add('qualification__active');

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active');
    });

    tab.classList.add('qualification__active')
  });
});

// SERVIÇOS MODAL

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal')

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

// PORFOLIO SWIPER

let swiper = new Swiper(".mySwiper", {
loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});