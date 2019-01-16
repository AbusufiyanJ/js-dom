var btns = document.querySelectorAll('#book-list .delete')

Array.from(btns).forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const li = e.target.parentElement

    li.parentNode.removeChild(li)
  })
})

const link = document.querySelector('#page-banner a')

link.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('navigation to ',e.target.textContent,'was prevented');
})

const banner = document.querySelector('#page-banner')

console.log('#page-banner node type is:', banner.nodeType)

console.log('#page-banner node name is:', banner.nodeName)

console.log('#page-banner child node:', banner.hasChildNodes())

const clonedBanner = banner.cloneNode(true)
console.log(clonedBanner)
