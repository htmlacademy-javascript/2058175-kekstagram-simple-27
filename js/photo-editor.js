const Parameters = {
  STEP: 25,
  VALUE_MIN: 25,
  VALUE_MAX: 100,
};

const controlValueElement = document.querySelector('.scale__control--value');
const uploadImageElement = document.querySelector('.img-upload__preview');

const changeSize = () => {
  const number = controlValueElement.value / Parameters.VALUE_MAX;
  uploadImageElement.style.transform = `scale(${number})`;
  controlValueElement.value = `${controlValueElement.value}%`;
};

const onControlBiggerClick = () => {
  if (parseInt(controlValueElement.value, 10) < Parameters.VALUE_MAX) {
    controlValueElement.value =
      parseInt(controlValueElement.value, 10) + Parameters.STEP;
  } else {
    controlValueElement.value = Parameters.VALUE_MAX;
  }
  changeSize();
};

const onControlSmallerClick = () => {
  if (parseInt(controlValueElement.value, 10) > Parameters.VALUE_MIN) {
    controlValueElement.value =
      parseInt(controlValueElement.value, 10) - Parameters.STEP;
  } else {
    controlValueElement.value = Parameters.VALUE_MIN;
  }
  changeSize();
};

export { onControlBiggerClick, onControlSmallerClick };
