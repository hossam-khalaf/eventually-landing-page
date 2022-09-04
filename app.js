const btn = document.querySelector('form button')

btn.addEventListener('click', (e) => {
	e.preventDefault()
	document.querySelector('.thanks').style.display = 'block'
})
