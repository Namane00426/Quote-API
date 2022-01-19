const submitButton = document.getElementById('submit-edit');
const newQuoteContainer = document.getElementById('new-quote');
const fetchByIdButton = document.getElementById('fetch-by-id');
const quoteContainer = document.getElementById('quote-container');

const resetQuotes = () => {
  quoteContainer.innerHTML = '';
}

const renderError = response => {
  quoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
}

const renderQuotes = (quotes = []) => {
  resetQuotes();
  if (quotes.length > 0) {
    quotes.forEach(quote => {
      const newQuote = document.createElement('div');
      newQuote.className = 'single-quote';
      newQuote.innerHTML = `<div class="quote-text">${quote.quote}</div>
      <div class="attribution">- ${quote.person}</div>
      <div class="quote-id right">ID:${quote.id}</div>`
      quoteContainer.appendChild(newQuote);
    });
  } else {
    quoteContainer.innerHTML = '<p>Your request returned no quotes.</p>';
  }
}

fetchByIdButton.addEventListener('click', () => {
  const searchId = document.getElementById('quote-id').value;
  fetch(`/api/quotes?id=${searchId}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderQuotes(response.quotes);
  });
});

submitButton.addEventListener('click', () => {
  const id = document.getElementById('id').value;
  const quote = document.getElementById('quote').value;
  const person = document.getElementById('person').value;

  fetch(`/api/quotes/${id}?quote=${quote}&person=${person}`, {
    method: 'PUT',
  })
  .then(response => response.json())
  .then(response => {
    renderQuotes(response.quotes);
  });
});