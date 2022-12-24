import './main.scss';
import './fonts/fonts.scss';
import img1 from './images/image.png';
import img2 from './images/logo.svg';

const createDivEl = (divClass, src, alt, cl) => {
  const div = document.createElement('div');
  div.classList.add(`${divClass}`);
  div.innerHTML = `
    <img src="${src}" alt="${alt}" class="${cl}">
  `;
  return div;
};

function component(text) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

document.body.prepend(component('Проект собран на Webpack'));
document.body.append(createDivEl('logo-png', img1, 'Загрузка PNG изображений с помощью Webpack', 'logo1'));
document.body.append(createDivEl('logo-svg', img2, 'Загрузка SVG изображений с помощью Webpack', 'logo2'));