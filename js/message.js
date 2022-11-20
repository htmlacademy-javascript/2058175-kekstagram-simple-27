import { isEscapeKey } from './util.js';
import { onPopupEscKeydown } from './form.js';

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

const onALertEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
    document.removeEventListener('keydown', onALertEscKeydown);
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
  document.addEventListener('keydown', onALertEscKeydown);
  document.addEventListener('click', onClick);
};

const failDataSend = () => {
  document.body.append(errorMessageElement);
  document.addEventListener('keydown', onALertEscKeydown);
  document.addEventListener('click', onClick);
};

function closeMessage() {
  const templateElement =
    document.querySelector('.success') || document.querySelector('.error');
  templateElement.remove();
  document.removeEventListener('click', onClick);
  document.addEventListener('keydown', onPopupEscKeydown);
}

export { createMessage, successDataSend, failDataSend };
