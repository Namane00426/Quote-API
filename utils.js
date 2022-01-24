const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getIndexById = (id, elementList) => {
  return elementList.findIndex((element) => {
    return element.id === Number(id);
  });
};

const updateQuote = 
  (id, queryArguments, arr) => {
   if(id < 0 || arr.length < id) {
     throw new Error('invalid parameter')
   } else {
   arr[id] = queryArguments;
   return arr[id];
  }
}

module.exports = {
  getRandomElement,
  getIndexById,
  updateQuote
}
