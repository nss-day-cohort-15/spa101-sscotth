console.log('Welcome to our website fellow developer!')

var navLinks = document.querySelectorAll('li')
var pages = document.querySelectorAll('.page')

showPage(location.hash)

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', clickedNavLink);
}

function clickedNavLink (evt) {
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.add('hidden')
  }

  showPage(evt.target.hash)
}

function showPage (id) {
  if (id) {
    document.querySelector(id).classList.remove('hidden')
  } else {
    document.querySelector('#home').classList.remove('hidden')
  }
}
