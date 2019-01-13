const bookList = document.querySelector('#book-list ')

console.log('the next sibling node is:', bookList.nextSibling)
console.log('the next sibling element node is:', bookList.nextElementSibling)

console.log('book-list previous sibiling is:', bookList.previousSibling)
console.log('the previous sibiling element node is:', bookList.previousElementSibling)

console.log('the previous sibiling2 element node is:', bookList.previousElementSibling.querySelector('p').innerHTML += '<br> Too cool for everyone else!')
