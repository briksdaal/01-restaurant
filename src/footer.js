import { mdiGithub } from '@mdi/js';
import { cube } from './math';
import createSvg from './createSvg';

function getFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  const content = document.createElement('div');
  content.classList.add('footer-inner');
  content.textContent = 'Created by Briksdaal';

  //   footer.appendChild(content);

  const para = document.createElement('p');
  para.textContent = `Copyright © ${new Date().getFullYear()} Briksdaal `;
  const ghLink = document.createElement('a');
  ghLink.setAttribute('href', 'https://github.com/briksdaal');
  ghLink.setAttribute('target', '_blank');

  const svg = createSvg(mdiGithub);
  console.log(cube(5));
  ghLink.appendChild(svg);

  para.appendChild(ghLink);
  footer.appendChild(para);
  return footer;
}

export default getFooter;
