const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview');
const effectButtonList = document.querySelector('.effects__list');

controlValue.value = 100;

function changeSize() {
  const number = controlValue.value / 100;
  uploadImage.style.transform = `scale(${number})`;
  controlValue.value = `${controlValue.value}%`;
}

function changeEffect(evt) {
  uploadImage.classList.add(`effects__preview--${evt.target.value}`);
  uploadImage.className = `img-upload__preview effects__preview--${evt.target.value}`;
}

controlBigger.addEventListener('click', () => {
  if (parseInt(controlValue.value, 10) < 100) {
    controlValue.value = parseInt(controlValue.value, 10) + 25;
    changeSize();
  }
});

controlSmaller.addEventListener('click', () => {
  if (parseInt(controlValue.value, 10) > 25) {
    controlValue.value = parseInt(controlValue.value, 10) - 25;
    changeSize();
  }
});

effectButtonList.addEventListener('click', (evt) => {
  if (evt.target.nodeName === 'INPUT') {
    changeEffect(evt);
  }
});

// effectButtonList.addEventListener('click', (evt) => {
//   if (evt.target.nodeName === 'INPUT') {
//     uploadImage.classList.add(`effects__preview--${evt.target.value}`);
//     uploadImage.className = `img-upload__preview effects__preview--${evt.target.value}`;
//   }
// });

export { changeSize, changeEffect };

// export { changeSize };
