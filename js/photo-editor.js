const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const uploadImage = document.querySelector('.img-upload__preview');
const effectButtonList = document.querySelector('.effects__list');
// const sliderElement = document.querySelector('.effect-level__slider');
// const sliderValue = document.querySelector('.effect-level__value');

// function moveSlider() {
//   sliderElement.style.display = 'block';
//   sliderValue.value = sliderElement.noUiSlider.get();
// }

// noUiSlider.create(sliderElement, {
//   range: {
//     min: 0,
//     max: 1,
//   },
//   start: 0,
//   step: 0.1,
//   connect: 'lower',
// });

// effectButtonList.addEventListener('click', (evt) => {
//   if (evt.target.id === 'effect-chrome') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 1
//       },
//       start: 0,
//       step: 0.1
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImage.style.filter = `grayscale(${sliderValue.value})`;
//     });
//   }
//   else if(evt.target.id === 'effect-sepia') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 1
//       },
//       start: 0,
//       step: 0.1
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImage.style.filter = `sepia(${sliderValue.value})`;
//     });
//   }
//   else if(evt.target.id === 'effect-marvin') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 100
//       },
//       start: 0,
//       step: 1
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImage.style.filter = `invert(${sliderValue.value}${'%'})`;
//     });
//   }
//   else if(evt.target.id === 'effect-phobos') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 3
//       },
//       start: 0,
//       step: 0.1
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImage.style.filter = `blur(${sliderValue.value}${'px'})`;
//     });
//   }
//   else if(evt.target.id === 'effect-heat') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 1,
//         max: 3
//       },
//       start: 0,
//       step: 0.1
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImage.style.filter = `brightness(${sliderValue.value})`;
//     });
//   }
//   else if(evt.target.id === 'effect-none') {
//     sliderElement.noUiSlider.on('update', () => {
//       sliderValue.value = 0;
//       uploadImage.style.filter = 'none';
//       sliderElement.style.display = 'none';
//     });
//   }
// });

controlValue.value = 100;

function changeSize() {
  const number = controlValue.value / 100;
  uploadImage.style.transform = `scale(${number})`;
  controlValue.value = String(`${controlValue.value}%`);
}

function disableButton() {
  EventTarget.disabled = true;
}

function changeEffect(evt) {
  if (evt.target.nodeName === 'INPUT') {
    uploadImage.classList.add(`effects__preview--${evt.target.value}`);
    uploadImage.className = `img-upload__preview effects__preview--${evt.target.value}`;
  }
}

controlBigger.addEventListener('click', () => {
  if (parseInt(controlValue.value, 10) < 100) {
    controlValue.value = parseInt(controlValue.value, 10) + 25;
    changeSize();
  }
  if (parseInt(controlValue.value, 10) === 100) {
    disableButton();
  }
});

controlSmaller.addEventListener('click', () => {
  if (parseInt(controlValue.value, 10) > 25) {
    controlValue.value = parseInt(controlValue.value, 10) - 25;
    changeSize();
  }
  if (parseInt(controlValue.value, 10) === 25) {
    disableButton();
  }
});

effectButtonList.addEventListener('click', (evt) => {
  changeEffect(evt);
});

export { changeSize, disableButton, changeEffect };
