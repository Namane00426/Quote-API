const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
  res.send({
    quote: getRandomElement(quotes)
  });
})

app.get('/api/quotes', (req, res, next) => {
  if(!req.query.person) {
    res.send({quotes: quotes});
  } else {
    const foundArr = quotes.filter((quote) => quote.person === req.query.person)
    res.send({
     quotes: foundArr
    })
  }
  
})

app.post('/api/quotes', (req, res, next) => {
  if(req.query.quote && req.query.person) {
    quotes.push({
      quote: req.query.quote,
      person: req.query.person})
      res.send({
        quote: quotes[quotes.length-1]
      })
  } else {
    res.status(400).send('fill new quote and person both');
  }
})



app.listen(PORT, () => {
  console.log(`Listning server ${PORT}...`)
})

