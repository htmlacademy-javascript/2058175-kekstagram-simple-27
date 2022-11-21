const pictureTemplate = document.querySelector('#picture').content;
const imageElement = document.querySelector('.pictures');

const renderImage = (image) => {
  const imageFragment = document.createDocumentFragment();
  image.forEach(({ url, comments, likes }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent =
      comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    imageFragment.appendChild(pictureElement);
  });
  imageElement.appendChild(imageFragment);
};

export {renderImage};
