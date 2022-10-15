const PHOTO_COUNT = 25;
const DESCRIPTION = [
  'Это пёс',
  'Красивый закат',
  'Звёздное небо над головой',
  'Работаем',
  'Пицца с ананасами и что вы мне сделаете',
  'Что-то очень абстрактное',
  'Смотрите, какие кубы',
  'Кошка-картошка',
  'Случайный набор чисел',
  'Всё пустое',
  'Кукушка улетела',
  'Печёт пирог',
  'Полный сюр',
  'Что-то случилось',
  'Ничего непонятно',
  'Наконец улетаем',
  'Рыба!',
  'Спатьспатьспать',
  'Как похорошела Москва!',
  'Это надо видеть',
  'Здесь должна быть умная цитата',
  'Не судите строго...',
  'На самом деле здесь строчка из песни',
  'Данное сообщение (материал) создано и (или) распространено иностранным средством массовой информации, выполняющим функции иностранного агента',
  'Как прекрасен этот мир, посмотри!',
];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAME = [
  'Анна',
  'Борис',
  'Василиса',
  'Гоша',
  'Диана',
  'Евгений',
  'Жанна',
  'Захар',
  'Ирина',
  'Коля',
  'Лена',
  'Макс',
  'Нина',
  'Олег',
  'Полина',
  'Рома',
  'Света',
  'Тима',
  'Ульяна',
  'Фёдор',
];
const AVATAR_ID_MIN = 1;
const AVATAR_ID_MAX = 6;

const MIN_COMMENT_NUMBER = 0;
const MAX_COMMENT_NUMBER = 10;

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}

const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

const createMessage = () =>
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    getRandomArrayElement(MESSAGE)
  ).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(
    AVATAR_ID_MIN,
    AVATAR_ID_MAX
  )}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAME),
});

const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from(
    {
      length: getRandomPositiveInteger(MIN_COMMENT_NUMBER, MAX_COMMENT_NUMBER),
    },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPhoto = () => Array.from({ length: PHOTO_COUNT }, (_, photoIndex) =>
  createPhotoDescription(photoIndex + 1)
);

getPhoto();
checkStringLength();

