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
   const quoteIndex = getIndexById(id, arr);
   if(quoteIndex === -1) {
     throw new Error('invalid parameter')
   }
   if(queryArguments.id) {
    queryArguments.id = Number(queryArguments.id);
   }
   Object.assign(arr[qoteIndex], queryArguments);
   return arr[quoteIndex];
  };

module.exports = {
  getRandomElement,
  getIndexById,
  updateQuote
};
