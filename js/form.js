import { isEscapeKey } from './util.js';
import './photo-editor.js';
import './slider.js';
const sliderElement = document.querySelector('.effect-level__slider');

const uploadButton = document.querySelector('.img-upload__input');
const overlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeButton = document.querySelector('.img-upload__cancel');
const commentElement = document.querySelector('.text__description');
const effectButton = document.querySelectorAll('.effects__radio');
const controlValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview');
const sliderContainerElement = document.querySelector('.effect-level');

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
  uploadImage.style.filter = 'none';
  sliderElement.style.display = 'none';
  controlValue.value = '100%';
  sliderContainerElement.classList.add('hidden');
}

function closeModal() {
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadButton.value = '';
  commentElement.value = '';
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

export { openModal, closeModal, onPopupEscKeydown};
