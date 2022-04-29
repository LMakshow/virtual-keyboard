import Keyboard from './Keyboard.js';
import { createDomNode, testCapsLock } from './Common.js';

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

  // Create keyboard
  const keyboard = new Keyboard();
  body.append(keyboard.generateKeyboard());

  // Physical keyboard interaction
  document.addEventListener('keydown', (event) => {
    const button = document.querySelector(`[data-code=${event.code}]`);
    if (button) {
      button.classList.add('active');
      if (event.code === 'CapsLock') testCapsLock(event);
      if ((event.code === 'AltLeft' && event.shiftKey) || (event.code === 'AltRight' && event.shiftKey)) keyboard.languageChange(event);
      if ((event.code === 'ShiftLeft' && event.altKey) || (event.code === 'ShiftRight' && event.altKey)) keyboard.languageChange(event);
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') keyboard.updateKeyboard(event);
    }
  });

  document.addEventListener('keyup', (event) => {
    const button = document.querySelector(`[data-code=${event.code}]`);
    if (button) {
      button.classList.remove('active');
      if (event.code === 'CapsLock') testCapsLock(event);
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') keyboard.updateKeyboard(event);
    }
  });
};
