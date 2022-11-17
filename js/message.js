import { closeModal } from './form.js';
import { isEscapeKey } from './util.js';

const success = document.querySelector('#success').content;
const successButton = success.querySelector('.success__button');
const error = document.querySelector('#error').content;
const errorButton = error.querySelector('.error__button');
const containers =
  success.querySelector('.success') || error.querySelector('.error');

function createMessage() {
  const messageContainer = document.createElement('div');
  const messageText = document.createElement('p');
  const messageButton = document.createElement('button');
  messageButton.type = 'button';
  messageText.textContent = 'Не удалось загрузить фотографии.';
  messageButton.textContent = 'OK';
  messageContainer.classList.add('failed');
  messageButton.classList.add('button__failed');
  messageContainer.appendChild(messageText);
  messageContainer.appendChild(messageButton);
  document.body.appendChild(messageContainer);
  messageButton.addEventListener('click', () => {
    messageContainer.classList.add('hidden');
  });
}

const deleteParentElements = (element) => {
  const parents = [];
  while (element.parentNode.nodeName.toLowerCase() !== 'body') {
    element = element.parentElement;
    parents.push(element);
  }
  for (let i = 0; i < parents.length; i++) {
    parents[i].remove();
  }
};

const onAlertEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    containers.remove();
  }
};

function closeAlert(evt) {
  evt.preventDefault();
  document.removeEventListener('keydown', onAlertEscKeydown);
  deleteParentElements(evt.target);
}

const addElement = (element) => {
  element.cloneNode(true);
  document.body.appendChild(element);
  // document.addEventListener('keydown', onAlertEscKeydown);
  // document.addEventListener('click', hideElements);
  containers.classList.remove('hidden');
};

function successDataSend() {
  closeModal();
  addElement(success);
  successButton.addEventListener('click', closeAlert);
}

function failDataSend() {
  error.cloneNode(true);
  addElement(error);
  errorButton.addEventListener('click', closeAlert);
  document.addEventListener('keydown', onAlertEscKeydown);
}

export { createMessage, successDataSend, failDataSend };
