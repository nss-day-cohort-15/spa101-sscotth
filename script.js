console.log('Welcome to our website fellow developer!')

var navLinks = document.querySelectorAll('li')
var pages = document.querySelectorAll('.page')

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', clickedNavLink);
}

function clickedNavLink (evt) {
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.add('hidden')
  }

  document.querySelector(evt.target.hash).classList.remove('hidden')
}
