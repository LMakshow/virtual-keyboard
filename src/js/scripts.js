import Keyboard from './Keyboard.js';
import { createDomNode } from './Common.js';

const title = 'Virtual Keyboard';
const subTitle1 = 'Change Language: Shift + Alt';
const subTitle2 = 'Made for: Windows';
const { body } = document;

// Creating header
const createHeader = () => {
  const header = createDomNode('div', '', 'header');
  header.append(createDomNode('h1', title, 'header__text'));
  header.append(createDomNode('div', '', 'subheading'));
  body.append(header);
  const subheading = document.querySelector('.subheading');
  subheading.append(createDomNode('p', subTitle1, 'subheading__text'));
  subheading.append(createDomNode('p', subTitle2, 'subheading__text'));
};

// Start the page generation

window.onload = () => {
  // Create DOM
  createHeader();
  const textField = createDomNode('textarea', '', 'textfield');
  textField.disabled = 'disabled';
  body.append(textField);
  const keyboard = new Keyboard();
  body.append(keyboard.generateKeyboard());
};
