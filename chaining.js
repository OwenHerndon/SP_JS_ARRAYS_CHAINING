var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log(integers);

integers.sort(decending);
integers = integers.reverse();
console.log(integers);

integers = integers.filter(remove);
console.log(integers);

integers = integers.map(multiply);
console.log(integers);

integers = integers.reduce(add);
console.log(integers);

function decending(a,b){
		return a - b;
}

function remove (a){
	return a <19;
}

function multiply (a){
	return a = (a*1.5) - 1;
}

function add (a, b){
	return a + b;
}