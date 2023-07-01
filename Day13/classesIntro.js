class Product {
	/**
	 * Product is the javascript class
	 * name and price is called as the data members
	 * describeProduct is called as the member functions
	 */

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	describeProduct() {}
}

let iphone = new Product('iphone 12', 2323232);
let mac = new Product('mac book air', 343434);

console.log(iphone, mac);
