import falafelImg from './images/falafel.avif';

function getHome() {
  const home = document.createElement('div');
  home.textContent = 'Home sweet home';

  const falafel = new Image();
  falafel.src = falafelImg;

  //   home.appendChild(falafel);

  return home;
}

export default getHome;
