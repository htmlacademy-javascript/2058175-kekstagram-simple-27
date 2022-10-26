import {isEscapeKey} from './util.js';

const uploadButton = document.querySelector('.img-upload__input');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = document.querySelector('.img-upload__cancel');
const commentText = document.querySelector('.text__description');
const effectButton = document.querySelectorAll('.effects__radio');

const clearCheckboxes = () => {
  for(let i = 0; i < effectButton.length; i++) {
    effectButton[i].checked = false;
  }
};

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
}

function closeModal () {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadButton.value = '';
  commentText.value = '';
  clearCheckboxes();
}

uploadButton.addEventListener('change', (evt) => {
  evt.preventDefault();
  openModal();
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

export {openModal};
export {closeModal};
