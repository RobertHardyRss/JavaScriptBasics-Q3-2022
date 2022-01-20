greeting("Robert", 51);

console.log("Hello world!");

// this is setting a variable suit to the string spades
let suit = "spades"; // string
let face = "queen";
let value = 10; // number

let isFace = true; //boolean

let aceOfSpades = {
	// object
	suit: "spades",
	face: "ace",
	value: 1,
	isFace: false,
};

// console.log(aceOfSpades.toString());

// single line comment


this is a
multiline comment
*/

// arrays are collections of data

let agesOfTable1 = [13, 23, 33]; // array
// console.log(agesOfTable1[2]);

// let myMoney = "I want lots and lots of it $$$";
// console.log(myMoney.toUpperCase());
// console.log("I loke mo money".length);

let namesAndAges = ["Hunter", 13, "Patrick", 14, "Tanner", 14.8];

namesAndAges.forEach((n) => {
	// console.log(n);
});

let over14 = agesOfTable1.filter((n) => n > 14);

// console.log(over14);

function square(number) {
	let result = number * number;
	return result;
}

console.log(square(2));

function greeting(name, age) {
	let ageString;

	if (age > 40) {
		ageString = " super old";
	} else {
		ageString = "not so old";
	}

	let sayHi = "Hi my name is " + name + " and I am " + ageString;

	console.log(sayHi);
}


