import Keyboard from './Keyboard.js';
import { createDomNode, testCapsLock } from './Common.js';

const title = 'Virtual Keyboard';
const subTitle1 = 'Change Language: Shift + Alt';
const subTitle2 = 'Made for: Windows';
const footerText = 'Состояние Caps Lock проверяется при нажатии любой клавиши (ограничение JS)<br>Максим Литвин © 2022';

const { body } = document;
const textField = createDomNode('textarea', '123', 'textfield');
const keyboard = new Keyboard();
const footer = createDomNode('footer', footerText, 'footer');

const keyPress = (event, button, code) => {
  event.preventDefault();
  if (code === 'CapsLock') testCapsLock(event);
  if ((code === 'AltLeft' && event.shiftKey)
    || (code === 'AltRight' && event.shiftKey)
    || (code === 'ShiftLeft' && event.altKey)
    || (code === 'ShiftRight' && event.altKey)
    || (code === 'Lang')) {
    keyboard.languageChange(event);
  }
  if (code === 'ShiftLeft' || code === 'ShiftRight') keyboard.updateKeyboard(event);
  if (code === 'Tab') textField.value += '    ';
  if (code === 'Enter') textField.value += '\n';
  if (code === 'Backspace') textField.value = textField.value.slice(0, -1);
  if (!button.dataset.noType) {
    textField.value += ((event.shiftKey && !event.getModifierState('CapsLock'))
      || (!event.shiftKey && event.getModifierState('CapsLock')))
      ? button.textContent
      : button.textContent.toLowerCase();
  }
};

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
  // textField.disabled = 'disabled';
  body.append(textField);

  // Create keyboard
  body.append(keyboard.generateKeyboard());
  body.append(footer);
  body.addEventListener('keydown', (event) => testCapsLock(event), { once: true });

  // Physical keyboard interaction
  document.addEventListener('keydown', (event) => {
    const button = document.querySelector(`[data-code=${event.code}]`);
    if (button) {
      button.classList.add('active');
      keyPress(event, button, event.code);
    }
  });
  document.querySelector('.keyboard').addEventListener('click', (event) => {
    if (event.target.classList.contains('key')) {
      const button = event.target;
      keyPress(event, button, button.dataset.code);
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
