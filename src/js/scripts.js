import Keyboard from './Keyboard.js';
import { createDomNode } from './Common.js';

const title = 'Virtual Keyboard';
const subTitle1 = 'Change Language: Shift + Alt';
const subTitle2 = 'Made for: Windows';
const footerText = 'Maksym Lytvyn © 2022';

const { body } = document;
const textField = createDomNode('textarea', '', 'textfield');
const keyboard = new Keyboard();
const footer = createDomNode('footer', footerText, 'footer');

const keyPress = (event, button, code) => {
  let text = '';
  let cursor = textField.selectionEnd;
  event.preventDefault();
  textField.focus();
  if (code === 'CapsLock') keyboard.changeCapsLock(event);
  if (
    (code === 'AltLeft' && (event.shiftKey || keyboard.shift))
    || (code === 'AltRight' && (event.shiftKey || keyboard.shift))
    || (code === 'ShiftLeft' && event.altKey)
    || (code === 'ShiftRight' && event.altKey)
    || (code === 'Lang')) {
    keyboard.languageChange(event);
    keyboard.removeShift(event);
  }
  if (code === 'ShiftLeft' || code === 'ShiftRight') keyboard.updateKeyboard(event);
  if (code === 'ArrowLeft' && cursor > 0) textField.setSelectionRange(cursor - 1, cursor - 1);
  if (code === 'ArrowRight') textField.setSelectionRange(cursor + 1, cursor + 1);

  if (code === 'ArrowUp') {
    const textBeforeCursor = textField.value.substring(0, cursor).split('\n');
    // if no Enters or line is longer than 57 symbols
    if (textBeforeCursor.length === 1
      || textBeforeCursor[textBeforeCursor.length - 1].length >= 57) {
      cursor -= 57;
      // if prev line is longer than cursor position in current line
    } else if (textBeforeCursor[textBeforeCursor.length - 1].length
      <= textBeforeCursor[textBeforeCursor.length - 2].length % 57) {
      cursor -= (textBeforeCursor[textBeforeCursor.length - 2].length % 57) + 1;
      // if prev line is shorter than cursor position in the current line
    } else {
      cursor -= textBeforeCursor[textBeforeCursor.length - 1].length + 1;
    }
    if (cursor < 0) cursor = 0;
    textField.setSelectionRange(cursor, cursor);
  }

  if (code === 'ArrowDown') {
    const textBeforeCursor = textField.value.substring(0, cursor).split('\n');
    const textAfterCursor = textField.value.substring(textField.selectionEnd).split('\n');
    // if no Enters or next line is longer than 57 symbols
    if (textAfterCursor.length === 1 || textAfterCursor[0].length >= 57) {
      cursor += 57;
      // if next line shorter than cursor position
    } else if ((textBeforeCursor[textBeforeCursor.length - 1].length % 57)
    > textAfterCursor[1].length) {
      cursor += textAfterCursor[0].length + textAfterCursor[1].length + 1;
      // if current line is very long
    } else if ((((textBeforeCursor[textBeforeCursor.length - 1].length % 57)
      + textAfterCursor[0].length) > 57)) {
      cursor += textAfterCursor[0].length;
      // if next line longer than cursor position
    } else {
      cursor += (textBeforeCursor[textBeforeCursor.length - 1].length % 57)
        + textAfterCursor[0].length + 1;
    }
    textField.setSelectionRange(cursor, cursor);
  }
  if (code === 'Tab') text = '    ';
  if (code === 'Enter') text = '\n';
  if (code === 'Backspace') text = '-1';
  if (!button.dataset.noType) {
    text = button.textContent;
    keyboard.removeShift(event);
  }

  if (text) {
    let textBeforeCursor = textField.value.substring(0, cursor);
    const textAfterCursor = textField.value.substring(textField.selectionEnd);
    if (text === '-1') {
      text = '';
      if (cursor === textField.selectionEnd) {
        textBeforeCursor = textBeforeCursor.slice(0, -1);
        cursor -= (cursor > 0) ? 2 : 1;
      } else cursor -= 1;
    }
    textField.value = textBeforeCursor + text + textAfterCursor;
    textField.setSelectionRange(cursor + 1, cursor + 1);
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
  body.append(textField);

  // Create keyboard
  body.append(keyboard.generateKeyboard());
  body.append(footer);

  // Physical keyboard interaction
  document.addEventListener('keydown', (event) => {
    const button = document.querySelector(`[data-code=${event.code}]`);
    if (button) {
      button.classList.add('active');
      keyPress(event, button, event.code);
    }
  });

  document.addEventListener('keyup', (event) => {
    const button = document.querySelector(`[data-code=${event.code}]`);
    if (button) {
      button.classList.remove('active');
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        keyboard.removeShift(event);
        keyboard.updateKeyboard(event);
      }
    }
  });

  // Mouse interaction
  document.querySelector('.keyboard').addEventListener('click', (event) => {
    if (event.target.closest('.key')) {
      const button = event.target.closest('.key');
      if (button.dataset.code === 'ShiftLeft'
      || button.dataset.code === 'ShiftRight') {
        keyboard.shift = !keyboard.shift;
        button.classList.toggle('active');
      }
      keyPress(event, button, button.dataset.code);
    }
  });
};
