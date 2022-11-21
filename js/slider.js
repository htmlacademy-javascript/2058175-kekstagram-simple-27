const uploadImageElement = document.querySelector('.img-upload__preview');
const effectButtonList = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');

const EFFECTS = {
  none: {
    min: 0,
    max: 100,
    step: 1,
  },
  chrome: {
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    style: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

function getKey(object) {
  return Object.keys(object);
}

const effectsName = () => {
  getKey(EFFECTS);
};


// console.log(getKeyByValue(EFFECTS));

function moveSlider() {
  sliderElement.style.display = 'block';
  sliderValueElement.value = sliderElement.noUiSlider.get();
}

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

// effectButtonList.addEventListener('click', (evt) => {
//   if (evt.target.id === EFFECTS.key) {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: EFFECTS.key.min,
//         max: EFFECTS.key.max
//       },
//       start: EFFECTS.key.max,
//       step: EFFECTS.key.step
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImageElement.style.filter = `${EFFECTS.key.style}(${sliderValueElement.value}${EFFECTS.key.unit})`;
//     });
//   }});

// effectButtonList.addEventListener('click', (evt) => {
//   if (evt.target.id === 'effect-chrome') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 1
//       },
//       start: 1,
//       step: 0.1
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImageElement.style.filter = `grayscale(${sliderValueElement.value})`;
//     });
//   }
//   else if(evt.target.id === 'effect-sepia') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 1
//       },
//       start: 1,
//       step: 0.1
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImageElement.style.filter = `sepia(${sliderValueElement.value})`;
//     });
//   }
//   else if(evt.target.id === 'effect-marvin') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 100
//       },
//       start: 100,
//       step: 1
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImageElement.style.filter = `invert(${sliderValueElement.value}${'%'})`;
//     });
//   }
//   else if(evt.target.id === 'effect-phobos') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 3
//       },
//       start: 3,
//       step: 0.1
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImageElement.style.filter = `blur(${sliderValueElement.value}${'px'})`;
//     });
//   }
//   else if(evt.target.id === 'effect-heat') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 1,
//         max: 3
//       },
//       start: 3,
//       step: 0.1
//     });
//     sliderElement.noUiSlider.on('update', () => {
//       moveSlider();
//       uploadImageElement.style.filter = `brightness(${sliderValueElement.value})`;
//     });
//   }
//   else if(evt.target.id === 'effect-none') {
//     sliderElement.noUiSlider.on('update', () => {
//       sliderValueElement.value = 0;
//       uploadImageElement.style.filter = 'none';
//       sliderElement.style.display = 'none';
//     });
//   }
// });
