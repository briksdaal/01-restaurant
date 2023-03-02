function getHome() {
  const home = document.createElement('div');
  home.classList.add('home-page');

  const hero = document.createElement('div');
  hero.classList.add('hero');

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const container = document.createElement('div');
  container.classList.add('hero-container');
  const heroHeading = document.createElement('h2');
  heroHeading.textContent = 'Discover the Middle East';

  container.appendChild(heroHeading);

  hero.appendChild(overlay);
  hero.appendChild(container);

  const homeContent = document.createElement('div');
  homeContent.classList.add('home-content');

  const paragraphs = [
    'Welcome to our Sherpa Sherpa, where we serve delicious and authentic Mediterranean cuisine. Our restaurant is the perfect place to experience the vibrant flavors of the Middle East. Whether you are a vegan, vegetarian or meat lover, our menu has something for everyone.',
    'Our signature dish is our falafel pita sandwich, made with freshly made falafels, hummus, tahini, pickles, and fresh veggies. Our falafels are made from scratch using a blend of chickpeas, herbs, and spices, giving them their unique and delicious taste.',
    'In addition to our falafel sandwich, we also offer a variety of other dishes such as shawarma, kebab, and salads. Our sides include fries, grilled vegetables, and lentil soup. You can wash it all down with our refreshing homemade lemonade.',
    'Our restaurant has a cozy and inviting atmosphere, perfect for a casual lunch or a dinner with friends and family. Our friendly staff is always ready to assist you in choosing the perfect dish to satisfy your cravings.',
    'Come and visit us at our restaurant and discover the flavors of the Middle East. We promise you won\'t be disappointed!',
  ];

  paragraphs.forEach((para) => {
    const paraElement = document.createElement('p');
    paraElement.textContent = para;
    homeContent.appendChild(paraElement);
  });

  home.appendChild(hero);
  home.appendChild(homeContent);

  return home;
}

export default getHome;
