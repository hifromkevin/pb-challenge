// Add our saved items
let saved = '';
let price;

JSON.parse(localStorage.saved).forEach(item => {
	if (item.priceRange) {
		price = item.priceRange.regular ? item.priceRange.regular.high : item.priceRange.selling.high;
	} else {
		price = item.price.regular;
	}

	saved += `
	<div class="box saved ${item.id}" id="${item.id}">
		<img class="box__thumb" src="${item.thumbnail.href}" alt="${item-name}" />
		<span class="box__title">${item.name}</span>
		<span class="box__price">$${price}</span>
	</div>`;
});

if (saved.length) document.getElementById('savedProducts').innerHTML = saved;


// Remove any saved items
let savedItems = document.getElementsByClassName('saved');

for (var x = 0; x < savedItems.length; x++) {
	let savedId = savedItems[x].id;
	savedItems[x].addEventListener('click', (e) => {
		e.preventDefault();

		let savedProducts = localStorage.saved ? JSON.parse(localStorage.saved) : [];
		let newSaved;

		for (var y = 0; y < savedProducts.length; y++) {
			if (savedProducts[y].id === savedId) {
				newSaved = savedProducts.slice(0, y).concat(savedProducts.slice(y + 1, savedProducts.length));
				break;
			}
		}

		newSaved = typeof(newSaved === 'object') ? JSON.stringify(newSaved) : JSON.stringify('[]');
		localStorage.setItem('saved', newSaved);
		document.location.reload();
	});
}





