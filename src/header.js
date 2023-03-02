function getHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  const h1 = document.createElement('h1');
  h1.textContent = 'Falafel Shawarma Inc';

  const nav = document.createElement('ul');

  const home = document.createElement('li');
  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  home.appendChild(homeBtn);
  homeBtn.dataset.pageBtn = 'home';

  const menu = document.createElement('li');
  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  menu.appendChild(menuBtn);
  menuBtn.dataset.pageBtn = 'menu';

  const contact = document.createElement('li');
  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';
  contact.appendChild(contactBtn);
  contactBtn.dataset.pageBtn = 'contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  header.appendChild(h1);
  header.appendChild(nav);

  return header;
}

export default getHeader;
