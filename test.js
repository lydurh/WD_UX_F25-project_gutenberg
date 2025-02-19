const BOOK_URL = 'http://gutendex.com/books';
const DEFAULT_BOOKS = 10;

const showRandomBook = async (numBooks = DEFAULT_BOOKS) => {
  const fragment = document.createDocumentFragment();
  try {
    const response = await fetch(BOOK_URL);
    const data = await response.json();
    const books = data.results;

    books.forEach(book => {
      const card = document.querySelector('#book-card').content.cloneNode(true);

      card.querySelector('h2').innerText = book.title;
      card.querySelector('h3').innerText = book.author;

      const img = card.querySelector('img');
      // img.setAttribute('src', book.imageUrl);  // Uncomment and add correct image URL
      // img.setAttribute('alt', book.title);     // Uncomment when adding image

      card.querySelector('p').innerText = book.summaries;

      fragment.append(card);
    });

  } catch (error) {
    console.log(error);
  }

  document.querySelector('#book-list').append(fragment);
};

showRandomBook();