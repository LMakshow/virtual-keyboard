const keyData = [
  [ // row 1
    { key: { ru: 'Ё', en: '`' }, code: 'Backquote' },
    { key: { ru: '1', en: '1' }, shift: { ru: '!', en: '!' }, code: 'Digit1' },
    { key: { ru: '2', en: '2' }, shift: { ru: '"', en: '@' }, code: 'Digit2' },
    { key: { ru: '3', en: '3' }, shift: { ru: '№', en: '#' }, code: 'Digit3' },
    { key: { ru: '4', en: '4' }, shift: { ru: ';', en: '$' }, code: 'Digit4' },
    { key: { ru: '5', en: '5' }, shift: { ru: '%', en: '%' }, code: 'Digit5' },
    { key: { ru: '6', en: '6' }, shift: { ru: ':', en: '^' }, code: 'Digit6' },
    { key: { ru: '7', en: '7' }, shift: { ru: '?', en: '&' }, code: 'Digit7' },
    { key: { ru: '8', en: '8' }, shift: { ru: '*', en: '*' }, code: 'Digit8' },
    { key: { ru: '9', en: '9' }, shift: { ru: '(', en: '(' }, code: 'Digit9' },
    { key: { ru: '0', en: '0' }, shift: { ru: ')', en: ')' }, code: 'Digit0' },
    { key: { ru: '-', en: '-' }, shift: { ru: '_', en: '_' }, code: 'Minus' },
    { key: { ru: '=', en: '=' }, shift: { ru: '+', en: '+' }, code: 'Equal' },
    {
      key: 'Backspace', code: 'Backspace', class: 'key_backspace', noType: true,
    },
  ],
  [ // row 2
    {
      key: 'Tab', code: 'Tab', class: 'key_tab', noType: true,
    },
    { key: { ru: 'Й', en: 'Q' }, code: 'KeyQ' },
    { key: { ru: 'Ц', en: 'W' }, code: 'KeyW' },
    { key: { ru: 'У', en: 'E' }, code: 'KeyE' },
    { key: { ru: 'К', en: 'R' }, code: 'KeyR' },
    { key: { ru: 'Е', en: 'T' }, code: 'KeyT' },
    { key: { ru: 'Н', en: 'Y' }, code: 'KeyY' },
    { key: { ru: 'Г', en: 'U' }, code: 'KeyU' },
    { key: { ru: 'Ш', en: 'I' }, code: 'KeyI' },
    { key: { ru: 'Щ', en: 'O' }, code: 'KeyO' },
    { key: { ru: 'З', en: 'P' }, code: 'KeyP' },
    { key: { ru: 'Х', en: '[' }, shift: { ru: 'Х', en: '{' }, code: 'BracketLeft' },
    { key: { ru: 'Ъ', en: ']' }, shift: { ru: 'Ъ', en: '}' }, code: 'BracketRight' },
    {
      key: { ru: '\\', en: '\\' }, shift: { ru: '|', en: '|' }, code: 'Backslash', class: 'key_backslash',
    },
  ],
  [ // row 3
    {
      key: '<span class="caps_icon">•</span><div>Caps<br>Lock</div>', code: 'CapsLock', class: 'key_capslock', noType: true,
    },
    { key: { ru: 'Ф', en: 'A' }, code: 'KeyA' },
    { key: { ru: 'Ы', en: 'S' }, code: 'KeyS' },
    { key: { ru: 'В', en: 'D' }, code: 'KeyD' },
    { key: { ru: 'А', en: 'F' }, code: 'KeyF' },
    { key: { ru: 'П', en: 'G' }, code: 'KeyG' },
    { key: { ru: 'Р', en: 'H' }, code: 'KeyH' },
    { key: { ru: 'О', en: 'J' }, code: 'KeyJ' },
    { key: { ru: 'Л', en: 'K' }, code: 'KeyK' },
    { key: { ru: 'Д', en: 'L' }, code: 'KeyL' },
    { key: { ru: 'Ж', en: ';' }, shift: { ru: 'Ж', en: ':' }, code: 'Semicolon' },
    { key: { ru: 'Э', en: '\'' }, shift: { ru: 'Э', en: '"' }, code: 'Quote' },
    {
      key: 'Enter', code: 'Enter', class: 'key_enter', noType: true,
    },
  ],
  [ // row 4
    {
      key: 'Shift', code: 'ShiftLeft', class: 'key_leftshift', noType: true,
    },
    { key: { ru: 'Я', en: 'Z' }, code: 'KeyZ' },
    { key: { ru: 'Ч', en: 'X' }, code: 'KeyX' },
    { key: { ru: 'С', en: 'C' }, code: 'KeyC' },
    { key: { ru: 'М', en: 'V' }, code: 'KeyV' },
    { key: { ru: 'И', en: 'B' }, code: 'KeyB' },
    { key: { ru: 'Т', en: 'N' }, code: 'KeyN' },
    { key: { ru: 'Ь', en: 'M' }, code: 'KeyM' },
    { key: { ru: 'Б', en: ',' }, shift: { ru: 'Б', en: '<' }, code: 'Comma' },
    { key: { ru: 'Ю', en: '.' }, shift: { ru: 'Ю', en: '>' }, code: 'Period' },
    { key: { ru: '.', en: '/' }, shift: { ru: ',', en: '?' }, code: 'Slash' },
    { key: '▲', code: 'ArrowUp' },
    {
      key: 'Shift', code: 'ShiftRight', class: 'key_rightshift', noType: true,
    },
  ],
  [
    {
      key: 'Ctrl', code: 'ControlLeft', class: 'key_leftctrl', noType: true,
    },
    {
      key: 'Alt', code: 'AltLeft', class: 'key_leftalt', noType: true,
    },
    { key: ' ', code: 'Space', class: 'key_space' },
    {
      key: 'Alt', code: 'AltRight', class: 'key_rightalt', noType: true,
    },
    {
      key: 'Ctrl', code: 'ControlRight', class: 'key_rightctrl', noType: true,
    },
    { key: '◄', code: 'ArrowLeft' },
    { key: '▼', code: 'ArrowDown' },
    { key: '►', code: 'ArrowRight' },
    {
      key: { ru: '🇷🇺', en: '🇺🇸' }, code: 'Lang', class: 'key_lang', noType: true,
    },
  ],
];

export default keyData;
