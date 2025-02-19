const BOOK_URL = 'http://gutendex.com/books';


const DEFAULT_BOOKS = 10;

const showRandomBook = async (numBooks = DEFAULT_BOOKS) => {
  const fragment = document.createDocumentFragment(); {
    await fetch(`${BOOK_URL}`)
      .then(response => response.json())
      .then(data => {
        data.array.forEach(data => {

          const card = document.querySelector('#book-card').content.cloneNode(true);

          card.querySelector('h2').innerText = data.title;
          card.querySelector('h3').innerText = data.author;

          const img = card.querySelector('img');
          // img.setAttribure('src', `${}`);
          // img.setAttribure('alt',)

          card.querySelector('p').innerText = data.summaries;
          fragment.append(card);
        });
      })
      .catch(error => console.log(error));
  }
  document.querySelector('#book-list').append(fragment);
};

showRandomBook();



