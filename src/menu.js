import MenuImg1 from './images/falafel_amba.webp';
import MenuImg2 from './images/falafel_baguette.jpg';
import MenuImg3 from './images/falafel_pita.jpg';
import MenuImg4 from './images/falafel_plate.jpg';
import MenuImg5 from './images/falafel.avif';
import MenuImg6 from './images/hummus_shawarma.jpg';
import MenuImg7 from './images/salads.avif';
import MenuImg8 from './images/shawarma_baguette.jpg';
import MenuImg9 from './images/shawarma_plate.jpg';
import MenuImg10 from './images/skillet.avif';

function getMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu-page');

  const menuHeading = document.createElement('h2');
  menuHeading.textContent = 'Menu';

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  const menuItems = [
    {
      name: 'Falafel Pita Sandwich',
      price: '$8.99',
      description: 'Freshly made falafels, hummus, tahini, pickles, and fresh veggies, all wrapped up in a warm pita bread.',
      imageUrl: MenuImg1,
    },
    {
      name: 'Falafel Plate',
      price: '$10.99',
      description: 'A hearty serving of falafels, hummus, tabbouleh, pickles, and warm pita bread.',
      imageUrl: MenuImg2,
    },
    {
      name: 'Falafel Wrap',
      price: '$7.99',
      description: 'Our delicious falafels, fresh veggies, and tangy tzatziki sauce, wrapped in a soft flour tortilla.',
      imageUrl: MenuImg3,
    },
    {
      name: 'Spicy Falafel Pita',
      price: '$9.99',
      description: 'For those who like a little heat, our falafels are mixed with spicy harissa and served with hummus, tahini, pickles, and fresh veggies.',
      imageUrl: MenuImg4,
    },
    {
      name: 'Falafel Salad',
      price: '$9.99',
      description: 'Fresh greens, tomatoes, cucumbers, red onions, and our homemade falafels, drizzled with a tangy lemon vinaigrette.',
      imageUrl: MenuImg5,
    }, {
      name: 'Chicken Shawarma Pita',
      price: '$9.99',
      description: 'Marinated chicken cooked on a rotating spit, sliced thin and served in a warm pita with lettuce, tomatoes, onions, and your choice of sauce.',
      imageUrl: MenuImg6,
    },
    {
      name: 'Beef Shawarma Plate',
      price: '$12.99',
      description: 'Tender strips of beef cooked on a rotating spit, served with rice, hummus, tabbouleh, and your choice of sauce.',
      imageUrl: MenuImg7,
    },
    {
      name: 'Falafel Shawarma Wrap',
      price: '$8.99',
      description: 'Our delicious falafels, fresh veggies, and tangy tzatziki sauce, all wrapped up in a soft flour tortilla.',
      imageUrl: MenuImg8,
    },
    {
      name: 'Sabich Pita',
      price: '$7.99',
      description: 'A classic Israeli street food! Fried eggplant, hard-boiled egg, hummus, tahini, and pickles, all wrapped up in a warm pita bread.',
      imageUrl: MenuImg9,
    },
    {
      name: 'Sabich Salad',
      price: '$9.99',
      description: 'Fresh greens, cucumbers, tomatoes, red onions, and all the classic sabich ingredients - fried eggplant, hard-boiled egg, hummus, tahini.',
      imageUrl: MenuImg10,
    },
  ];

  menuItems.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-item');
    const name = document.createElement('h3');
    name.textContent = item.name;
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = item.price;
    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = item.description;
    const img = new Image();
    img.src = item.imageUrl;

    itemDiv.appendChild(name);
    itemDiv.appendChild(price);
    itemDiv.appendChild(desc);
    itemDiv.appendChild(img);

    menuContent.appendChild(itemDiv);
  });

  menu.appendChild(menuHeading);
  menu.appendChild(menuContent);

  return menu;
}

export default getMenu;
