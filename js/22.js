"use strict";

let a = 5;
	b = a;

b = b + 5;

console.log(b);
console.log(a);


const obj = {
	a: 5,
	b: 1
};

// const copy = obj; //Передача не структуры объекта, а копии (Передача по ссылке)

// copy.a = 10;

// console.log(copy);
// console.log(obj);


function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	
	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const oldArray = [ 'a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'kzzkkzk';
console.log(oldArray);
console.log(newArray);


const a = ['aaa', 'bbbb', 'ccc'],
	  b = ['fff', 'nnnn', 'sss'],
	  c = [...a, ...b];
console.log(a);
console.log(b);
console.log(c);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7];

log(...num);
