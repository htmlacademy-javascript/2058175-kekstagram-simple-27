import { isEscapeKey } from './util.js';
import { sendData } from './server.js';
import { successDataSend, failDataSend } from './message.js';
const sliderElement = document.querySelector('.effect-level__slider');

const uploadButton = document.querySelector('.img-upload__input');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = document.querySelector('.img-upload__cancel');
const commentText = document.querySelector('.text__description');
const effectButton = document.querySelectorAll('.effects__radio');
const controlValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview');
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

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal() {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  uploadImage.style.filter = 'none';
  sliderElement.style.display = 'none';
  controlValue.value = '100%';
}

function closeModal() {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadButton.value = '';
  commentText.value = '';
  uploadImage.style.transform = `scale(${1})`;
  uploadImage.className = 'img-upload__preview';
  effectButton[0].checked = true;
}

uploadButton.addEventListener('change', (evt) => {
  evt.preventDefault();
  openModal();
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

export { openModal, closeModal, setFormSubmit };
