import {getPhoto} from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const getContent = getPhoto();

const imageFragment = document.createDocumentFragment();

getContent.forEach((image) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = image.url;
  pictureElement.querySelector('.picture__comments').textContent = image.comments;
  pictureElement.querySelector('.picture__likes').textContent = image.likes;
  imageFragment.appendChild(pictureElement);
});

pictures.appendChild(imageFragment);
