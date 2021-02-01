// // Ternary operator

// function isUserValid(bool){
// 	return bool;
// }

// var answer = isUserValid(true) ? "You maay enter" : "Access denied";
// var automatedAnswer = "Your account is" + (isUserValid(false) ? "1234" : "not available");

// // Switch Statement

// function moveCommand(){
// 	var whatHappens;
// 	switch(direction){
// 		case "forward":
// 			whatHappens = "you encounter a monster";
// 			break;
// 		case "backward":
// 			whatHappens = "you are home";
// 			break;
// 		case "right":
// 			whatHappens = "you are";
// 			break;
// 		case "left":
// 			whatHappens = "you";
// 			break;
// 		default:
// 			whatHappens = "please enter a valid direction"
// 	}
// 	return whatHappens;

// }

 //  let + const

// const player = "Bobby";
// let experience = 100;
// let wizzardLevel = false;

// if (experience > 90){
// 	let wizzardLevel = true;
// 	console.log("inside", wizzardLevel);
// }

// console.log("outside", wizzardLevel);

// Destructuring/Unpacking

// const obj= {
// 	player:"bobby",
// 	experience: 100,
// 	wizzardLevel: false
// }

// const {player, experience} = obj;
// let {wizzardLevel} = obj;

// Object properties

// const a = "Simon";
// const b = true;
// const c={}

// const obj = {
// 	a,
// 	b,
// 	c
// }

// Templeta string

// const name = "John";
// const pet = "horse";
// const age = 35;
// const greetings = `Hello ${name}, you seem to be ${age}. very nice ${pet}`

// default argument

// function greet( name = "John", pet = "horse", age = 35 ){
// 	return `Hello ${name}, you seem to be ${age}. very nice ${pet} you have`;
// }

// Symbol

// let sym1 = Symbol();
// let sym2 = Symbol("foo");
// let sym3 = Symbol('foo');

// arrow functions

// function add1(a,b){
// 	return a + b;
// }

// const add = (a,b) => a + b;

// Advanced function

// Closures

// const first = () => {
// 	const greet = "Hi";
// 	const second = () => {
// 		alert(greet);
// 	}
// 	return second;
// }

// const newFunc = first();
// newFunc();


// Currying

// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// const multiplyBy5 = curriedMultiply(5);


// Compose

// const compose = (f, g) => (a) => f(g(a));


// const sum = (num) => num + 1;

// compose(sum, sum)(5);


// Avoiding Side effects and Functional Purity

// // Array
// const array = [1,2,3,45,];
// const output = [];

// const newArray = array.forEach((num)=> {
// 	output.push(num*2);
// })

// map

// const mapArray = array.map((num) => {
// 	return num * 2;
// })

// const mapArray = array.map(num => return num * 2)

// console.log(mapArray)


// filter

// const array = [1,2,3,45,];
// // const filterArray = array.filter(num => {
// // 	return num > 5
// // })

// const filterArray = array.filter(num => num > 5);

// reduce

// const array = [1,2,3,45];
// const reduceArray = array.reduce((accumulator, num) => {
// 	return accumulator + num
// }, 5);

// console.log('reduce', reduceArray)

// REFERENCE TYPE

// let object1 = {
// 	value:10
// };

// let object2 = object1;

// let object3 ={
// 	value : 18
// };

// // CONTEXT VS SCOPE

// const object4={
// 	a: function(){
// 		console.log(this);
// 	}
// }

// // INSTANTIATION - INHERITANCE
// class Player {
// 	constructor(name, type) {
// 		this.name = name;
// 		this.type = type;
// 	}
// 	introduce() {
// 		console.log(`Hi Iam ${this.name}, I'm a ${this.type}`)
// 	}

// }

// class Wizard extends Player {
// 	constructor(name, type) {
// 		super(name, type)
// 	}
// 	play() {
// 		console.log(`Wee I'm a ${this.type}`);
// 	}
// }

// const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Wizard('Shawn', 'From the dead walker')

































