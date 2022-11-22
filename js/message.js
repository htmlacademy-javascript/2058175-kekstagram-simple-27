import { isEscapeKey } from './util.js';
import { onPopupEscKeydown } from './form.js';

const successTemplateElement = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorTemplateElement = document
  .querySelector('#error')
  .content.querySelector('.error');
const successMessageElement = successTemplateElement.cloneNode(true);
const errorMessageElement = errorTemplateElement.cloneNode(true);

const createMessage = () => {
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
};

const onAlertEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
    document.removeEventListener('keydown', onAlertEscKeydown);
  }
};

const closeMessageElements = [
  'success',
  'success__button',
  'error',
  'error__button',
];

const closeElementsOnClick = (evt) => {
  for (let i = 0; i < closeMessageElements.length; i++) {
    if (evt.target.className === closeMessageElements[i]) {
      closeMessage();
    }
  }
};

const showSuccess = () => {
  document.body.append(successMessageElement);
  document.addEventListener('keydown', onAlertEscKeydown);
  document.addEventListener('click', closeElementsOnClick);
};

const showFail = () => {
  document.body.append(errorMessageElement);
  document.addEventListener('keydown', onAlertEscKeydown);
  document.addEventListener('click', closeElementsOnClick);
};

function closeMessage() {
  const templateElement =
    document.querySelector('.success') || document.querySelector('.error');
  templateElement.remove();
  document.removeEventListener('click', closeElementsOnClick);
  if(document.body.classList.contains('modal-open')) {
    document.addEventListener('keydown', onPopupEscKeydown);
  }
}

export { createMessage, showSuccess, showFail };
