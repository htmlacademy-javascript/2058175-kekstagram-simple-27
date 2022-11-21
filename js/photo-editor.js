const Parameters = {
  STEP: 25,
  VALUE_MIN: 25,
  VALUE_MAX: 100,
};

const controlSmallerELement = document.querySelector(
  '.scale__control--smaller'
);
const controlBiggerElement = document.querySelector('.scale__control--bigger');
const controlValueElement = document.querySelector('.scale__control--value');
const uploadImageElement = document.querySelector('.img-upload__preview');

controlValueElement.value = 100;

function changeSize() {
  const number = controlValueElement.value / 100;
  uploadImageElement.style.transform = `scale(${number})`;
  controlValueElement.value = `${controlValueElement.value}%`;
}

const onControlBiggerCLick = () => {
  controlBiggerElement.addEventListener('click', () => {
    if (parseInt(controlValueElement.value, 10) < Parameters.VALUE_MAX) {
      controlValueElement.value =
        parseInt(controlValueElement.value, 10) + Parameters.STEP;
      changeSize();
    }
  });
};

const onControlSmallerClick = () => {
  controlSmallerELement.addEventListener('click', () => {
    if (parseInt(controlValueElement.value, 10) > Parameters.VALUE_MIN) {
      controlValueElement.value =
        parseInt(controlValueElement.value, 10) - Parameters.STEP;
      changeSize();
    }
  });
};

export {onControlBiggerCLick, onControlSmallerClick};
