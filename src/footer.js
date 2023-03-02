function getFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  const content = document.createElement('div');
  content.classList.add('footer-inner');
  content.textContent = 'Created by Briksdaal';

  footer.appendChild(content);

  return footer;
}

export default getFooter;
