import keyData from './KeyData.js';
import { createDomNode } from './Common.js';

export default class Keyboard {
  constructor() {
    this.lang = 'en';
  }

  languageCheck() {
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    } else {
      localStorage.setItem('lang', this.lang);
    }
  }

  languageChange(event) {
    if (this.lang === 'en') {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }
    localStorage.setItem('lang', this.lang);
    this.updateKeyboard(event);
  }

  updateKeyboard(event) {
    const { lang } = this;
    if (event.shiftKey) {
      if (lang === 'en') {
        document.querySelectorAll('.key').forEach((e) => {
          if (e.dataset.enShift) e.innerHTML = e.dataset.enShift;
        });
      } else {
        document.querySelectorAll('.key').forEach((e) => {
          if (e.dataset.ruShift) e.innerHTML = e.dataset.ruShift;
        });
      }
    } else {
      document.querySelectorAll('.key').forEach((e) => {
        if (e.dataset[lang]) e.innerHTML = e.dataset[lang];
      });
    }
  }

  generateKeyboard() {
    const keyboard = createDomNode('div', '', 'keyboard');
    const container = createDomNode('div', '', 'keyboard__container');
    this.languageCheck();
    // Create keyboard row by row
    for (let i = 0; i < keyData.length; i += 1) {
      const row = createDomNode('div', '', 'keyboard__row');
      keyData[i].forEach((e) => {
        // Create basic key
        const keyLabel = (e.key.ru && e.key.en) ? e.key[this.lang] : e.key;
        const key = createDomNode('div', keyLabel, 'key');
        // Add extra classes
        if (e.class) key.classList.add(e.class);
        // Add datasets to switch language and change with shift
        key.dataset.code = e.code;
        if (e.key.ru && e.key.en) {
          key.dataset.ru = e.key.ru;
          key.dataset.en = e.key.en;
        }
        if (e.shift) {
          key.dataset.ruShift = e.shift.ru;
          key.dataset.enShift = e.shift.en;
        }
        row.append(key);
      });
      container.append(row);
    }
    keyboard.append(container);
    return keyboard;
  }
}
