const BOOK_URL = 'https://gutendex.com/books/';

const showBooks = async () => {
  const fragment = document.createDocumentFragment();

  await fetch(BOOK_URL)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(book => {
        const card = document.querySelector('#book-card').content.cloneNode(true);

        card.querySelector('h2').innerText = book.title;
        card.querySelector('h3').innerText = book.authors.map(author => author.name).join(', ');

        const img = card.querySelector('img');
        img.setAttribute('src', book.formats["image/jpeg"] || 'default.jpg');
        img.setAttribute('alt', book.title);

        card.querySelector('p').innerText = book.summaries

        fragment.append(card);
      });
    })
    .catch(error => console.error(error));

  document.querySelector('#book-list').append(fragment);
};

showBooks();