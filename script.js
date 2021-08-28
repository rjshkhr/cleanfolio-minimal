const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')
const btnTheme = document.querySelector('.fa-moon')

const isDark = () => document.body.classList.contains('dark')

const setTheme = (bodyClass, buttonClass) => {
	document.body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))
	document.body.classList.add(bodyClass)
	btnTheme.classList.add(buttonClass)
	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', buttonClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

const setBodyTheme = () => document.body.classList.add(getBodyTheme)
const setBtnTheme = () => btnTheme.classList.add(getBtnTheme)

setBodyTheme()
setBtnTheme()
