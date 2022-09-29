// source: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(firstNumber, secondNumber) {
  if (firstNumber < 0 || secondNumber < 0) {
    return NaN;
  } else if (secondNumber < firstNumber) {
    return Math.round(
      Math.random() * (firstNumber - secondNumber) + secondNumber
    );
  }
  return Math.round(Math.random() * (secondNumber - firstNumber) + firstNumber);
}

getRandomNumber();

function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

checkStringLength();
