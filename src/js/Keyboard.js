import keyData from './KeyData.js';
import { createDomNode } from './Common.js';

export default class Keyboard {
  constructor() {
    this.lang = 'en';
  }

  generateKeyboard() {
    const keyboard = createDomNode('div', '', 'keyboard');
    const container = createDomNode('div', '', 'keyboard__container');
    for (let i = 0; i < keyData.length; i += 1) {
      const row = createDomNode('div', '', 'keyboard__row');
      keyData[i].forEach((e) => {
        const keyLabel = (e.key.ru && e.key.en) ? e.key[this.lang] : e.key;
        const key = createDomNode('div', keyLabel, 'key');
        if (e.class) key.classList.add(e.class);
        row.append(key);
      });
      container.append(row);
    }
    keyboard.append(container);
    return keyboard;
  }
}
