import { isEscapeKey } from './util.js';
import './photo-editor.js';
import './slider.js';
const sliderElement = document.querySelector('.effect-level__slider');

const uploadButtonElement = document.querySelector('.img-upload__input');
const overlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeButtonElement = document.querySelector('.img-upload__cancel');
const commentElement = document.querySelector('.text__description');
const effectButtonElement = document.querySelectorAll('.effects__radio');
const controlValueElement = document.querySelector('.scale__control--value');
const uploadImageElement = document.querySelector('.img-upload__preview');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal() {
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  uploadImageElement.style.filter = 'none';
  sliderElement.style.display = 'none';
  controlValueElement.value = '100%';
}

function closeModal() {
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadButtonElement.value = '';
  commentElement.value = '';
  uploadImageElement.style.transform = `scale(${1})`;
  uploadImageElement.className = 'img-upload__preview';
  effectButtonElement[0].checked = true;
}

uploadButtonElement.addEventListener('change', (evt) => {
  evt.preventDefault();
  openModal();
});

closeButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

export { openModal, closeModal, onPopupEscKeydown};
