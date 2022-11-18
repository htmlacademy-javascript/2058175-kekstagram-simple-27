import { closeModal } from './form.js';
import { isEscapeKey } from './util.js';

const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');
const successMessageElement = successTemplate.cloneNode(true);
const errorMessageElement = errorTemplate.cloneNode(true);

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

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const closeMessageElements = [
  'success',
  'success__button',
  'error',
  'error__button',
];

const onClick = (evt) => {
  for (let i = 0; i < closeMessageElements.length; i++) {
    if (evt.target.className === closeMessageElements[i]) {
      closeMessage();
    }
  }
};

const successDataSend = () => {
  document.body.append(successMessageElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onClick);
};

const failDataSend = () => {
  document.body.append(errorMessageElement);
  document.addEventListener('click', onClick);
};

function closeMessage() {
  const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
  if (messageElement === document.querySelector('.success')) {
    closeModal();
  }
  messageElement.remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onClick);
}

export { createMessage, successDataSend, failDataSend };
