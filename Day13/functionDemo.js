function cars(name, price) {
	this.name = name;
	this.price = price;

	return this;
	// return { name: 'something', price: 23434 };
}

var car1 = cars('anmeq', 2323);

console.log(car1);
