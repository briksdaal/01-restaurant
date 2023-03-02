import getHeader from './header';
import getFooter from './footer';
import getHome from './home';

function getInitial() {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('id', 'content');

  const mainContent = document.createElement('div');
  mainContent.classList.add('main');
  mainContent.appendChild(getHome());

  contentDiv.appendChild(getHeader());
  contentDiv.appendChild(mainContent);
  contentDiv.appendChild(getFooter());

  document.body.appendChild(contentDiv);
}

export default getInitial;
