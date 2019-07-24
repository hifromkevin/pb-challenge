fetch('./products.json')
	.then(resp => resp.json())
	.then(data => {
		let list = '';
		let price;

		let jsonData = JSON.stringify(data);
		localStorage.setItem('products', jsonData);
		console.log('ls', localStorage);

		data.groups.forEach(item => {
			// Since pricing is inconsistent among list items, determine how price is listed
			if (item.priceRange) {
				price = item.priceRange.regular ? 
								item.priceRange.regular.high : 
								item.priceRange.selling.high;
			} else {
				price = item.price.regular;
			}

			list += `
			<div class="box ${item.id}" id="${item.id}">
				<img class="box__thumb" src="${item.thumbnail.href}" alt="${item.name}" />
				<span class="box__title">${item.name}</span>
				<span class="box__price">$${price}</span>
			</div>`;
			});
			if (list.length) document.getElementById('productGrid').innerHTML = list;
		})