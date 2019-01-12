var books = document.querySelectorAll('#book-list li .name')
// console.log(books)

Array.from(books).forEach(function (book) {
  book.textContent += ' pigeon'
})

const bookList = document.querySelector('#book-list')
// bookList.innerHTML = '<h2> pigeons </h2>'
bookList.innerHTML += '<p>This is how you add HTML </p>'
