import { getContent } from './picture.js';
import { createMessage } from './message.js';

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        response.json().then((image) => {
          getContent(image);
        });
      } else {
        createMessage();
      }
    })
    .catch(() => {
      createMessage();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { sendData, getData };

