import { sendData } from './api.js';
import { showSuccess, showFail } from './message.js';
import { blockFormButton, unblockFormButton } from './form.js';
const formElement = document.querySelector('.img-upload__form');

const initListenerAlertOpen = (onSuccess, onFail) => {
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

export { initListenerAlertOpen };
