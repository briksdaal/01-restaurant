import getHome from './home';
import getMenu from './menu';
import getContact from './contact';
import getInitial from './initialLoad';
import './style.css';

function loadPage() {
  getInitial();

  const buttons = document.querySelectorAll('.nav li');

  buttons.forEach((button) => {
    const mainContent = document.querySelector('.main');

    button.addEventListener('click', (e) => {
      mainContent.innerHTML = '';

      const { pageBtn } = e.target.dataset;

      if (pageBtn === 'home') {
        mainContent.appendChild(getHome());
      } else if (pageBtn === 'menu') {
        mainContent.appendChild(getMenu());
      } else if (pageBtn === 'contact') {
        mainContent.appendChild(getContact());
      }
    });
  });
}

loadPage();
