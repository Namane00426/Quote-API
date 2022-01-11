const { request } = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, getIndexById, updateQuote } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

//GET random quote
app.get('/api/quotes/random', (req, res, next) => {
  res.send({
    quote: getRandomElement(quotes)
  });
})

//Get all quotes
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

//POST new quote
app.post('/api/quotes', (req, res, next) => {
  if(req.query.quote && req.query.person) {
    let newId = quotes.length + 1;
    quotes.push({
      id: `${newId}`,
      quote: req.query.quote,
      person: req.query.person});
      // console.log(quotes[quotes.length-1].id);
      res.status(201).send({
        quote: quotes[quotes.length-1]
      })
  } else {
    res.status(400).send('fill new quote and person both');
  }
})

//GET particular quote by id
app.get('/api/quotes/:id', (req, res, next) => {
  const foundQuote = getElementById(req.params.id, quotes);
  if(foundQuote) {
    res.send({
     quotes: quotes[foundQuote]
    })
  } else {
    res.status(404).send('');
  }
})

//PUT edit particular quote
app.put('/api/quotes/:id', (req, res, next) => {
  const quoteIndex = getIndexById(req.params.id, quotes);
  if(quoteIndex !== -1) {
    updateElement(req.params.id, req.query, quotes);
    res.send({
      quotes: quotes[quoteIndex]
    })
  } else {
    res.status(404).send();
  }
})



app.listen(PORT, () => {
  console.log(`Listning server ${PORT}...`)
})

