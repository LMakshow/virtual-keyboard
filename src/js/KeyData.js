const keyData = [
  [ // row 1
    { key: { ru: 'ё', en: '`' }, shift: { ru: 'Ё', en: '~' }, code: 'Backquote' },
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
    { key: { ru: 'й', en: 'q' }, shift: { ru: 'Й', en: 'Q' }, code: 'KeyQ' },
    { key: { ru: 'ц', en: 'w' }, shift: { ru: 'Ц', en: 'W' }, code: 'KeyW' },
    { key: { ru: 'у', en: 'e' }, shift: { ru: 'У', en: 'E' }, code: 'KeyE' },
    { key: { ru: 'к', en: 'r' }, shift: { ru: 'К', en: 'R' }, code: 'KeyR' },
    { key: { ru: 'е', en: 't' }, shift: { ru: 'Е', en: 'T' }, code: 'KeyT' },
    { key: { ru: 'н', en: 'y' }, shift: { ru: 'Н', en: 'Y' }, code: 'KeyY' },
    { key: { ru: 'г', en: 'u' }, shift: { ru: 'Г', en: 'U' }, code: 'KeyU' },
    { key: { ru: 'ш', en: 'i' }, shift: { ru: 'Ш', en: 'I' }, code: 'KeyI' },
    { key: { ru: 'щ', en: 'o' }, shift: { ru: 'Щ', en: 'O' }, code: 'KeyO' },
    { key: { ru: 'з', en: 'p' }, shift: { ru: 'З', en: 'P' }, code: 'KeyP' },
    { key: { ru: 'х', en: '[' }, shift: { ru: 'Х', en: '{' }, code: 'BracketLeft' },
    { key: { ru: 'ъ', en: ']' }, shift: { ru: 'Ъ', en: '}' }, code: 'BracketRight' },
    {
      key: { ru: '\\', en: '\\' }, shift: { ru: '|', en: '|' }, code: 'Backslash', class: 'key_backslash',
    },
  ],
  [ // row 3
    {
      key: '<span class="caps_icon">•</span><div>Caps<br>Lock</div>', code: 'CapsLock', class: 'key_capslock', noType: true,
    },
    { key: { ru: 'ф', en: 'a' }, shift: { ru: 'Ф', en: 'A' }, code: 'KeyA' },
    { key: { ru: 'ы', en: 's' }, shift: { ru: 'Ы', en: 'S' }, code: 'KeyS' },
    { key: { ru: 'в', en: 'd' }, shift: { ru: 'В', en: 'D' }, code: 'KeyD' },
    { key: { ru: 'а', en: 'f' }, shift: { ru: 'А', en: 'F' }, code: 'KeyF' },
    { key: { ru: 'п', en: 'g' }, shift: { ru: 'П', en: 'G' }, code: 'KeyG' },
    { key: { ru: 'р', en: 'h' }, shift: { ru: 'Р', en: 'H' }, code: 'KeyH' },
    { key: { ru: 'о', en: 'j' }, shift: { ru: 'О', en: 'J' }, code: 'KeyJ' },
    { key: { ru: 'л', en: 'k' }, shift: { ru: 'Л', en: 'K' }, code: 'KeyK' },
    { key: { ru: 'д', en: 'l' }, shift: { ru: 'Д', en: 'L' }, code: 'KeyL' },
    { key: { ru: 'ж', en: ';' }, shift: { ru: 'Ж', en: ':' }, code: 'Semicolon' },
    { key: { ru: 'э', en: '\'' }, shift: { ru: 'Э', en: '"' }, code: 'Quote' },
    {
      key: 'Enter', code: 'Enter', class: 'key_enter', noType: true,
    },
  ],
  [ // row 4
    {
      key: 'Shift', code: 'ShiftLeft', class: 'key_leftshift', noType: true,
    },
    { key: { ru: 'я', en: 'z' }, shift: { ru: 'Я', en: 'Z' }, code: 'KeyZ' },
    { key: { ru: 'ч', en: 'x' }, shift: { ru: 'Ч', en: 'X' }, code: 'KeyX' },
    { key: { ru: 'с', en: 'c' }, shift: { ru: 'С', en: 'C' }, code: 'KeyC' },
    { key: { ru: 'м', en: 'v' }, shift: { ru: 'М', en: 'V' }, code: 'KeyV' },
    { key: { ru: 'и', en: 'b' }, shift: { ru: 'И', en: 'B' }, code: 'KeyB' },
    { key: { ru: 'т', en: 'n' }, shift: { ru: 'Т', en: 'N' }, code: 'KeyN' },
    { key: { ru: 'ь', en: 'm' }, shift: { ru: 'Ь', en: 'M' }, code: 'KeyM' },
    { key: { ru: 'б', en: ',' }, shift: { ru: 'Б', en: '<' }, code: 'Comma' },
    { key: { ru: 'ю', en: '.' }, shift: { ru: 'Ю', en: '>' }, code: 'Period' },
    { key: { ru: '.', en: '/' }, shift: { ru: ',', en: '?' }, code: 'Slash' },
    { key: '▲', code: 'ArrowUp', noType: true },
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
    { key: '◄', code: 'ArrowLeft', noType: true },
    { key: '▼', code: 'ArrowDown', noType: true },
    { key: '►', code: 'ArrowRight', noType: true },
    {
      key: { ru: '🇷🇺', en: '🇺🇸' }, code: 'Lang', class: 'key_lang', noType: true,
    },
  ],
];

export default keyData;
