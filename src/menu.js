function getMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu-page');
  menu.textContent = 'Our menu';

  return menu;
}

export default getMenu;
