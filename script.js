'use strict';

const menuBurger = document.querySelector('.menu-burger');
const closeBtn = document.querySelector('.menu__header-close');
const menu = document.querySelector('.menu');
const contentMain = document.querySelector('.menu__content-main');
const headerLang = document.querySelector('.menu__header-lang');
const headerDropdown = document.querySelector('.menu__header-dropdown');
const chevronDown = document.querySelector('.fa-chevron-down');

const contentServices = document.querySelector('.menu__content-services');
const contentBottom = document.querySelector('.menu__content-bottom');
const servicesItem = document.querySelector('.services-item');

const servicesHeader = document.querySelector('.services__header');
const servicesOptions = document.querySelector('.services__options');
const servOptItem = document.querySelector('.services__options-item');
const contentCloud = document.querySelector('.menu__content-cloud');
const cloudHeader = document.querySelector('.cloud__header');

function hidePopup() {
  headerDropdown.classList.add('hide');
  headerLang.classList.remove('onclick-btn');
  chevronDown.classList.remove('onclick-btn-chevron-down');
}

document.body.addEventListener('click', hidePopup);

menuBurger.onclick = () => {
  menuBurger.classList.toggle('active');
  menu.classList.toggle('active');

  setTimeout(() => {
    menu.style.transform = 'scale(1)';
  }, 0);
};

closeBtn.onclick = () => {
  menu.style.transform = 'scale(0)';

  setTimeout(() => {
    menu.classList.toggle('active');
    menuBurger.classList.toggle('active');
  }, 100);
};

headerLang.onclick = (e) => {
  e.stopPropagation();
  headerDropdown.classList.toggle('hide');
  headerLang.classList.toggle('onclick-btn');
  chevronDown.classList.toggle('onclick-btn-chevron-down');
};

headerDropdown.onclick = (e) => {
  e.stopPropagation();
};

servicesItem.onclick = () => {
  contentMain.style.marginLeft = '-200px';
  contentBottom.style.marginLeft = '-200px';

  setTimeout(() => {
    contentServices.classList.toggle('active');
    contentMain.classList.toggle('active');
    contentBottom.classList.toggle('active');
  }, 100);
};

servicesHeader.onclick = () => {
  contentServices.classList.toggle('active');
  contentMain.classList.toggle('active');
  contentBottom.classList.toggle('active');

  setTimeout(() => {
    contentMain.style.marginLeft = '0px';
    contentBottom.style.marginLeft = '0px';
  }, 0);
};

servOptItem.onclick = () => {
  servicesOptions.style.marginLeft = '-200px';

  setTimeout(() => {
    contentServices.classList.toggle('active');
    contentCloud.classList.toggle('active');
  }, 100);
};

cloudHeader.onclick = () => {
  contentCloud.classList.toggle('active');
  contentServices.classList.toggle('active');

  setTimeout(() => {
    servicesOptions.style.marginLeft = '0px';
  }, 0);
};
