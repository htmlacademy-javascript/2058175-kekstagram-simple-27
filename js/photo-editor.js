const Parameters = {
  STEP: 25,
  VALUE_MIN: 25,
  VALUE_MAX: 100,
};

const controlValueElement = document.querySelector('.scale__control--value');
const uploadImageElement = document.querySelector('.img-upload__preview');

controlValueElement.value = 100;

function changeSize() {
  const number = controlValueElement.value / 100;
  uploadImageElement.style.transform = `scale(${number})`;
  controlValueElement.value = `${controlValueElement.value}%`;
}

const onControlBiggerCLick = () => {
  if (parseInt(controlValueElement.value, 10) < Parameters.VALUE_MAX) {
    controlValueElement.value =
      parseInt(controlValueElement.value, 10) + Parameters.STEP;
  } else if (parseInt(controlValueElement.value, 10) === Parameters.VALUE_MAX) {
    controlValueElement.value = 100;
  }
  changeSize();
};

const onControlSmallerClick = () => {
  if (parseInt(controlValueElement.value, 10) > Parameters.VALUE_MIN) {
    controlValueElement.value =
      parseInt(controlValueElement.value, 10) - Parameters.STEP;
  } else if (parseInt(controlValueElement.value, 10) === Parameters.VALUE_MIN) {
    controlValueElement.value = 25;
  }
  changeSize();
};

export { onControlBiggerCLick, onControlSmallerClick };
