// Create a function to calculate the distance between two points defined by their x, y
// coordinates

function calulate_distance(x1, y1, x2, y2) {
	var dum = (x2 - x1) ** 2 + (y2 - y1) ** 2;
	console.log(Math.sqrt(dum));
}

calulate_distance(1, 2, 1, 5);
calulate_distance(2, -6, 7, 3);
