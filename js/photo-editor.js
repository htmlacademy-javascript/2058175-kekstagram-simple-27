const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const uploadImageElement = document.querySelector('.img-upload__preview');
const effectButtonList = document.querySelector('.effects__list');

controlValue.value = 100;

function changeSize() {
  const number = controlValue.value / 100;
  uploadImageElement.style.transform = `scale(${number})`;
  controlValue.value = `${controlValue.value}%`;
}

function changeEffect(evt) {
  uploadImageElement.classList.add(`effects__preview--${evt.target.value}`);
  uploadImageElement.className = `img-upload__preview effects__preview--${evt.target.value}`;
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
