const Parameters = {
  STEP: 25,
  VALUE_MIN: 25,
  VALUE_MAX: 100,
};

const controlSmallerElement = document.querySelector('.scale__control--smaller');
const controlBiggerElement = document.querySelector('.scale__control--bigger');
const controlValueElement = document.querySelector('.scale__control--value');
const uploadImageElement = document.querySelector('.img-upload__preview');
const effectButtonList = document.querySelector('.effects__list');

controlValueElement.value = 100;

function changeSize() {
  const number = controlValueElement.value / 100;
  uploadImageElement.style.transform = `scale(${number})`;
  controlValueElement.value = `${controlValueElement.value}%`;
}

function changeEffect(evt) {
  uploadImageElement.classList.add(`effects__preview--${evt.target.value}`);
  uploadImageElement.className = `img-upload__preview effects__preview--${evt.target.value}`;
}

controlBiggerElement.addEventListener('click', () => {
  if (parseInt(controlValueElement.value, 10) < Parameters.VALUE_MAX) {
    controlValueElement.value = parseInt(controlValueElement.value, 10) + Parameters.STEP;
    changeSize();
  }
});

controlSmallerElement.addEventListener('click', () => {
  if (parseInt(controlValueElement.value, 10) > Parameters.VALUE_MIN) {
    controlValueElement.value = parseInt(controlValueElement.value, 10) - Parameters.STEP;
    changeSize();
  }
});

effectButtonList.addEventListener('click', (evt) => {
  if (evt.target.nodeName === 'INPUT') {
    changeEffect(evt);
  }
});
