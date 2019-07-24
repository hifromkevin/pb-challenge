fetch('./products.json')
	.then(resp => resp.json())
	.then(data => {
		let list = '';
		let price;

		let jsonData = JSON.stringify(data);
		localStorage.setItem('products', jsonData);
		console.log('ls', localStorage);
	})