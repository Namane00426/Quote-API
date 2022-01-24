const { request } = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, updateQuote } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

//GET random quote
app.get('/api/quotes/random', (req, res, next) => {
  res.send({
    quote: getRandomElement(quotes)
  });
})

//Get all quotes or get quotes by author request or specific id
app.get('/api/quotes', (req, res, next) => {
  if(!req.query.person && !req.query.id) {
    res.status(200).send({quotes: quotes});
  } else if (req.query.person) {
    const foundArr = quotes.filter((quote) => quote.person === req.query.person)
    res.status(200).send({
     quotes: foundArr
    })
  } else {
    const foundQuote = quotes.filter((quote) => quote.id === req.query.id)
    res.status(200).send({
      quotes: foundQuote
    })
  }
  
})

//POST new quote
app.post('/api/quotes', (req, res, next) => {
  if(req.query.quote && req.query.person) {
    let newId = quotes.length + 1
    quotes.push({
      id: newId.toString(),
      quote: req.query.quote,
      person: req.query.person
    });

      res.status(201).send({
        quote: quotes[quotes.length-1]
      })
  } else {
    res.status(400).send('fill new quote and person both');
  }
})

//PUT edit particular quote
app.put('/api/quotes/:id', (req, res, next) => {
  const editIndex = req.params.id;
  const queryArguments = {
    id:  editIndex,
    quote: req.query.quote, 
    person: req.query.person,
  };
  const editId = editIndex - 1;
  const updated =  updateQuote(editId, queryArguments, quotes);
  
  if (queryArguments) {
    res.status(200).send(
     {
      quote: updated
     } 
    )
  } else {
    res.status(400).send("SOMETHING WENT WRONG in this PUT")
  }
});




app.listen(PORT, () => {
  console.log(`Listning server ${PORT}...`)
})

