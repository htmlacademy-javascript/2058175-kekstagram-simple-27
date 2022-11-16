import { closeModal } from './form.js';
import { isEscapeKey } from './util.js';
import { getContent } from './picture.js';
const form = document.querySelector('.img-upload__form');
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

const setFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch('https://27.javascript.pages.academy/kekstagram-simple', {
      method: 'POST',
      body: formData,
    })
      .then(() => onSuccess())
      .catch(() => onFail());
  });
};

const onAlertEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    containers.remove();
  }
};

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

function closeAlert(evt) {
  evt.preventDefault();
  document.removeEventListener('keydown', onAlertEscKeydown);
  deleteParentElements(evt.target);
  containers.classList.remove('opened');
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

export { getData, setFormSubmit, successDataSend, failDataSend };

