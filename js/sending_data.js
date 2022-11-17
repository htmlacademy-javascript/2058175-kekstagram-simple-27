import { sendData } from './api.js';
import { successDataSend, failDataSend } from './message.js';
const formElement = document.querySelector('.img-upload__form');
const formButton = document.querySelector('.img-upload__submit');

const blockFormButton = () => {
  formButton.disabled = true;
  formButton.textContent = 'Сохранение';
};

const unblockFormButton = () => {
  formButton.disabled = false;
  formButton.textContent = 'Опубликовать';
};

const setFormSubmit = (onSuccess, onFail) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockFormButton();
    sendData(
      () => {
        onSuccess();
        successDataSend();
        unblockFormButton();
      },
      () => {
        onFail();
        failDataSend();
        unblockFormButton();
      },
      new FormData(evt.target)
    );
  });
};

export { setFormSubmit };
