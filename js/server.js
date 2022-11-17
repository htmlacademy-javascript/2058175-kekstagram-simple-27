import { closeModal } from './form.js';
import { isEscapeKey } from './util.js';
import { getContent } from './picture.js';
const success = document.querySelector('#success').content;
const successContainer = success.querySelector('.success');
const successButton = success.querySelector('.success__button');
const error = document.querySelector('#error').content;
const errorContainer = error.querySelector('.error');
const errorButton = error.querySelector('.error__button');
const containers = successContainer || errorContainer;

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        response.json().then((image) => {
          getContent(image);
        });
      } else {
        createMessage();
      }
    })
    .catch(() => {
      createMessage();
    });
};

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

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
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
  containers.remove();
}

function successDataSend() {
  closeModal();
  success.cloneNode(true);
  document.body.appendChild(success);
  document.addEventListener('keydown', onAlertEscKeydown);
}

function failDataSend() {
  error.cloneNode(true);
  document.body.appendChild(error);
  document.addEventListener('keydown', onAlertEscKeydown);
}

successButton.addEventListener('click', (evt) => {
  closeAlert(evt);
});

errorButton.addEventListener('click', (evt) => {
  closeAlert(evt);
});

export { createMessage, sendData, getData, successDataSend, failDataSend };

