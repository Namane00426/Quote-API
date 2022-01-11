const submitButton = document.getElementById('submit-quote');
const newQuoteContainer = document.getElementById('new-quote');

submitButton.addEventListener('click', () => {
  const quote = document.getElementById('quote').value;
  const person = document.getElementById('person').value;

  fetch(`/api/quotes?quote=${quote}&person=${person}`, {
    method: 'POST',
  })
  .then(response => response.json())
  .then(({quote}) => {
    const newQuote = document.createElement('div');
    newQuote.innerHTML = `
    <h3 class="center">Congrats, your quote was added!</h3>
    <div class="container center">
      <div class="left">
        <div class="quote-text"><h3>${quote.quote}</h3></div>
        <div class="attribution"><p>- ${quote.person}</p></div>
      </div>
      <div class="quote-id">ID:${quote.id}</div>
    </div>
    </div>
    <p class="center">Go to the <a href="index.html">home page</a> to request<br>and view all quotes.</p>
    `
    newQuoteContainer.appendChild(newQuote);
  });
});
