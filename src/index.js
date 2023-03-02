import getHeader from './header';
import getFooter from './footer';
import './style.css';

const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');

contentDiv.appendChild(getHeader());
contentDiv.appendChild(getFooter());
document.body.appendChild(contentDiv);
