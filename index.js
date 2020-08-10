const btn = document.querySelector('#submit')
const results = document.querySelector('.results')
const search = document.querySelector('#search')

btn.addEventListener('submit', async (e) => {
	e.preventDefault()
	results.innerHTML = ''
	search = search.value
	console.log(search)

	try {
		const customers = await axios.get(`/search?name=${search}`)

		if (customers.data.length === 0) {
			results.innerHTML += 'No results'
		} else {
			for (let customer of customers.data) {
				console.log(customer)
				results.innerHTML += `<li><a href='customers/${
					customer.id
				}'>${customer.fullName()}</a></li>`
			}
		}
		search.value = ''
	} catch (err) {
		console.log(err)
	}
})
