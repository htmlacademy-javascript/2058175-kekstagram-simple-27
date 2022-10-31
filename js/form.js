import {isEscapeKey} from './util.js';
import {sliderElement} from './slider.js';


const uploadButton = document.querySelector('.img-upload__input');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = document.querySelector('.img-upload__cancel');
const commentText = document.querySelector('.text__description');
const effectButton = document.querySelectorAll('.effects__radio');
const controlValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal () {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  uploadImage.style.filter = 'none';
  sliderElement.style.display = 'none';
}

function closeModal () {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadButton.value = '';
  commentText.value = '';
  controlValue.value = '100%';
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

export {openModal, closeModal};
