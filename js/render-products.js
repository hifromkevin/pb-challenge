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
	.then(() => {
		boxes = Array.from(document.getElementsByClassName('box'));

		for (var i = 0; i < boxes.length; i++) {
			let boxId = boxes[i].id;
			let savedHolder = [];

			boxes[i].addEventListener('click', (e) => {
				e.preventDefault();
				let localProducts = JSON.parse(localStorage.products).groups;
				let currentlySaved = localStorage.saved ?  JSON.parse(localStorage.saved) : [];

				let currentlySavedItems = currentlySaved.forEach(saved => savedHolder.push(saved.id));
 
				localProducts.forEach(product => {
					if (product.id === boxId && !savedHolder.includes(boxId)) {					
						let saved = localStorage.saved ? currentlySaved : [];
						saved.push(product);
						saved = JSON.stringify(saved);
						localStorage.setItem('saved', saved);
					}
				});
				// Time permitting, add pop up when clicked letting user know their item was saved
			});
		}
	})
	.catch(err => console.log(`Well that ain\'t right... ${err}`));