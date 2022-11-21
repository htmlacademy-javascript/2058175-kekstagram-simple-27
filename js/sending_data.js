import { sendData } from './api.js';
import { showSuccess, showFail } from './message.js';
const form = document.querySelector('.img-upload__form');
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
  form.addEventListener('submit', (evt) => {
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
