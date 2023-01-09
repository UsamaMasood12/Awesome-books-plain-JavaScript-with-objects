const savedBooks = localStorage.getItem('save');
let ourBooks = [];
if (savedBooks) {
  ourBooks = JSON.parse(savedBooks);
} else {
  const demoData = [
    {
      id: 1,
      name: 'Book1',
      author: 'Author1',
    },
    {
      id: 2,
      name: 'Book2',
      author: 'Author2',
    },
  ];
  localStorage.setItem('save', JSON.stringify(demoData));
  ourBooks = JSON.parse(savedBooks);
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}
// eslint-disable-next-line no-unused-vars
function removeBook(id) {
  ourBooks = ourBooks.filter((book) => {
    if (id === book.id) {
      return false;
    }
    return true;
  });
  localStorage.setItem('save', JSON.stringify(ourBooks));
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

const bookList = document.querySelector('#book-list');
ourBooks.forEach((book) => {
  const singleBook = document.createElement('div');
  singleBook.classList.add('single-book');
  singleBook.innerHTML = ` 
  <p>${book.name}</p>
  <p>${book.author}</p>
  <button onclick=removeBook(${book.id}) >Remove</button>
  <hr>
  `;
  bookList.appendChild(singleBook);
});

