import getHeader from './header';
import getFooter from './footer';
import getHome from './home';
import getMenu from './menu';
import getContact from './contact';
import './style.css';

const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');

const mainContent = document.createElement('div');
mainContent.classList.add('main-content');
mainContent.appendChild(getHome());

contentDiv.appendChild(getHeader());
contentDiv.appendChild(mainContent);
contentDiv.appendChild(getFooter());
document.body.appendChild(contentDiv);

const buttons = document.querySelectorAll('.header li');
buttons.forEach((button) => {
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
