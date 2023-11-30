const body = document.body

const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.fa-bars')

const themePreference = window.matchMedia('(prefers-color-scheme: dark)').matches || window.matchMedia('(prefers-color-scheme: no-preference)').matches && window.matchMedia('(prefers-color-scheme: dark)').matches;
const btnClassPreference = themePreference === true ? 'fa-sun' : 'fa-moon';

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const theme = themePreference ? 'dark' : 'light';

addThemeClass(theme, btnClassPreference);

localStorage.setItem('portfolio-theme', theme);
localStorage.setItem('portfolio-btn-theme', btnClassPreference);

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {
	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)

// Splitting the email into parts
var user = "paraskevasleivadaros";
var domain = "gmail";
var tld = "com";

// Assembling the email address
var email = user + "@" + domain + "." + tld;

// Creating a mailto link
var mailtoLink = "mailto:" + email;

// Inserting the mailto link into the webpage
var emailElement = document.getElementById("email-placeholder");
emailElement.innerHTML = '<a href="' + mailtoLink + '">' + email + '</a>';
