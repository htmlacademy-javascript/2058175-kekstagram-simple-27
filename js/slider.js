const uploadImageElement = document.querySelector('.img-upload__preview');
const effectButtonListElement = document.querySelector('.effects__list');
const sliderContainerElement = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'effect-chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'effect-sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'effect-marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'effect-phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'effect-heat',
    style: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

let currentEffect = 'none';

effectButtonListElement.addEventListener('click', (evt) => {
  for (let i = 0; i < EFFECTS.length; i++) {
    if (evt.target.id === EFFECTS[i].name) {
      currentEffect = EFFECTS[i];
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: currentEffect.min,
          max: currentEffect.max,
        },
        start: currentEffect.max,
        step: currentEffect.step,
      });
      sliderElement.noUiSlider.on('update', () => {
        moveSlider();
        uploadImageElement.style.filter = `${currentEffect.style}(${sliderValueElement.value}${currentEffect.unit})`;
      });
    } else if (evt.target.id === 'effect-none') {
      sliderElement.noUiSlider.on('update', () => {
        sliderValueElement.value = 0;
        uploadImageElement.style.filter = 'none';
        sliderElement.style.display = 'none';
        sliderContainerElement.classList.add('hidden');
      });
    }
  }
});

function moveSlider() {
  sliderElement.style.display = 'block';
  sliderContainerElement.classList.remove('hidden');
  sliderValueElement.value = sliderElement.noUiSlider.get();
}
