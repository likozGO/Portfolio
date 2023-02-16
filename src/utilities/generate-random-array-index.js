const generateRandomArrayIndex = (array = []) => {
  if (array.length === 0) throw new Error('Array is empty');

  return Math.trunc(Math.random() * array?.length);
};

export default generateRandomArrayIndex;
