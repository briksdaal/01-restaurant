function getMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu-page');

  const menuHeading = document.createElement('h2');
  menuHeading.textContent = 'Menu';

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  menu.appendChild(menuHeading);
  menu.appendChild(menuContent);

  return menu;
}

export default getMenu;
