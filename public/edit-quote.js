const fetchByIdButton = document.getElementById('fetch-by-id');
const fetchedQuoteContainer = document.getElementById('fetched-quote-container');


const resetFetchedQuotes = () => {
  fetchedQuoteContainer.innerHTML = '';
}

fetchByIdButton.addEventListener('click', () => {
  let searchId = document.getElementById('quote-id').value;
  
  fetch(`/api/quotes?id=${searchId}`)
  .then(response =>  {
    if(response.ok) {
      return response.json();
    } else {
      fetchedQuoteContainer.innerHTML = '<p>Your request returned no quotes.</p>';
    }
  })
  .then(response => {
    resetFetchedQuotes();
    const fetchedQuote = document.createElement('div');
    fetchedQuote.className = 'single-quote';
    fetchedQuote.innerHTML = 
    `<div>
    <div class="quote-text"><h3>${quote.quote}</h3></div>
    <div class="attribution"><p>- ${quote.person}</p></div>
    </div>
    <div class="quote-id right"><p>ID:${quote.id}</p></div>`

    fetchedQuoteContainer.appendChild(fetchedQuote);
  });
});

// const quotesSelector = (quotes = []) => {
//   resetQuotes();
//   if (quotes.length > 0) {
//     quotes.forEach(quote => {
//       const quoteOption = document.createElement('option');
//       quoteOption.value = `${quote.id}`;
//       quoteOption.innerHTML = `<option>${quote.quote}<br>${quote.person}</option>
//       `
//       quoteOptionContainer.appendChild(quoteOption);
//     });
//   } else {
//     quoteOptionContaine.innerHTML = '<p>Your request returned no quotes.</p>';
//   }
// )}
