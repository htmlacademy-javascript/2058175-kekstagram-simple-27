import { isEscapeKey } from './util.js';
import {onControlBiggerClick, onControlSmallerClick} from './photo-editor.js';
import './slider.js';
const sliderElement = document.querySelector('.effect-level__slider');

const uploadButtonElement = document.querySelector('.img-upload__input');
const overlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeButtonElement = document.querySelector('.img-upload__cancel');
const commentElement = document.querySelector('.text__description');
const effectButtonElements = document.querySelectorAll('.effects__radio');
const controlValueElement = document.querySelector('.scale__control--value');
const uploadImageElement = document.querySelector('.img-upload__preview');
const sliderContainerElement = document.querySelector('.effect-level');
const formButtonElement = document.querySelector('.img-upload__submit');
const controlSmallerElement = document.querySelector(
  '.scale__control--smaller'
);
const controlBiggerElement = document.querySelector('.scale__control--bigger');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = () => {
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  uploadImageElement.style.filter = 'none';
  sliderElement.style.display = 'none';
  controlValueElement.value = '100%';
  sliderContainerElement.classList.add('hidden');
  controlBiggerElement.addEventListener('click', onControlBiggerClick);
  controlSmallerElement.addEventListener('click', onControlSmallerClick);
};

function closeModal() {
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadButtonElement.value = '';
  commentElement.value = '';
  uploadImageElement.style.transform = `scale(${1})`;
  uploadImageElement.className = 'img-upload__preview';
  effectButtonElements[0].checked = true;
}

const onCloseButtonClick = () => {
  closeButtonElement.addEventListener('click', () => {
    closeModal();
  });
};

const onUploadButtonClick = () => {
  uploadButtonElement.addEventListener('change', () => {
    openModal();
  });
  onCloseButtonClick();
};

const blockFormButton = () => {
  formButtonElement.disabled = true;
  formButtonElement.textContent = 'Сохранение';
};

const unblockFormButton = () => {
  formButtonElement.disabled = false;
  formButtonElement.textContent = 'Опубликовать';
};

export { onUploadButtonClick, openModal, closeModal, onPopupEscKeydown, blockFormButton, unblockFormButton};
