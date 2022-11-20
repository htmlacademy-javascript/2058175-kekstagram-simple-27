import { sendData } from './api.js';
import { showSuccess, showFail } from './message.js';
const formElement = document.querySelector('.img-upload__form');
const formButtonElement = document.querySelector('.img-upload__submit');

const blockFormButton = () => {
  formButtonElement.disabled = true;
  formButtonElement.textContent = 'Сохранение';
};

const unblockFormButton = () => {
  formButtonElement.disabled = false;
  formButtonElement.textContent = 'Опубликовать';
};

const setFormSubmit = (onSuccess, onFail) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockFormButton();
    sendData(
      () => {
        onSuccess();
        showSuccess();
        unblockFormButton();
      },
      () => {
        onFail();
        showFail();
        unblockFormButton();
      },
      new FormData(evt.target)
    );
  });
};

export { setFormSubmit };
