// // Complete the below questions using this array:
// const array = [
// 	{
// 		username: "john",
// 		team: "red",
// 		score: 5,
// 		items: ["ball", "book", "pen"]
// 	},
// 	{
// 		username: "becky",
// 		team: "blue",
// 		score: 10,
// 		items: ["tape", "backpack", "pen"]
// 	},
// 	{
// 		username: "susy",
// 		team: "red",
// 		score: 55,
// 		items: ["ball", "eraser", "pen"]
// 	},
// 	{
// 		username: "tyson",
// 		team: "green",
// 		score: 1,
// 		items: ["book", "pen"]
// 	},

// ];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
// let newArray = []
// array.forEach(user => {
// 	let { username } = user;
// 	username = username + "!";
// 	newArray.push(username);
// })
// console.log(newArray);

// //Create an array using map that has all the usernames with a "?" at the end of usernames
// const mapArray = array.map(user => {
// 	let { username } = user;
// 	return username + "?";
// })
// console.log(mapArray);

// //Filter the array to only include users who are on team: red
// const filterArray = array.filter(user => {
// 	return user.team === "red";
// })
// console.log(filterArray);

// //Find out the total score of all users using reduce
// const total = array.reduce((acc, user) => {
// 	return acc + user.score
// }, 0);
// console.log(total);


// // (1), what is the value of i? INDEX of the array.
// // (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	return num * 2;
// })



// //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// const answer = array.map(user => {
// 	user.items = user.items.map(item => {
// 		return item + "!"
// 	});
// 	return user;
// })
// console.log(answer);



// Question 1: Clean the room function: given an input of 
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that 
// rganizes these into individual array that is ordered. For example 
// answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e.
//  [1, "2", "3", 2] should return [[1,2], ["2", "3"]]



const q1_array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
const q1_arrayStr = [1, "2", "3", 2];

function cleanArr(array) {
	let sortedArray = array.slice().sort((a,b)=>a-b);

	let temp = []; // where dupes are placed temporarily
	let subArray = []; // where we push subarray of dupes
	let cleanArr = [];
	let arrString = sortedArray.filter(item => typeof item === "string");
	let arrNum = sortedArray.filter(item => typeof item === "number");

	for(let i = 0; i < arrNum.length;i++) {
		// check prev and next val and push to temp
		if(arrNum[i] === arrNum[i+1]) { // this 1 === next 1 ADD
			temp.push(arrNum[i]);
		} else if(arrNum[i] === arrNum[i-1]) {
			// [1,1,1,1] => 3 == (3-1) => on prev check reset temp
    		// i: 0 1 2 3
			temp.push(arrNum[i]);
			subArray.push(temp);
			temp = [];
		} else if(arrNum[i] !== arrNum[i+1]) { // no duplicates
			subArray.push(arrNum[i]);
		}
	}
	
	cleanArr = cleanArr.concat([subArray], [arrString]);
 	// if arrayString is empty then remove array
    if(cleanArr[1][0] === undefined ) {
  		cleanArr.pop()
    }
    return cleanArr;
}

console.log("////// START OF Q1 //////");

console.log("\t array with numbers =>", cleanArr(q1_array));
console.log("\t array with strings =>", cleanArr(q1_arrayStr));

console.log("////// END OF Q1 //////");