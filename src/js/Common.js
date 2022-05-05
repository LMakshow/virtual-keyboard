export const createDomNode = (element, innerHTML, ...classes) => {
  const node = document.createElement(element);
  node.classList.add(...classes);
  node.innerHTML = innerHTML;
  return node;
};

export const testCapsLock = (event) => {
  if (event.getModifierState('CapsLock')) {
    document.querySelector('.caps_icon').classList.add('caps_on');
  } else {
    document.querySelector('.caps_icon').classList.remove('caps_on');
  }
};
