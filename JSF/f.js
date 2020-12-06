var database =[
    {
		username: "John",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"

	},
	{
		username: "ingrid",
		password: "777"

	}
];

var newsFeed =[

    {
		username: "Bobby",
		timeline: "JavaScript is good not better than JS"
    },
    {
    	username: "Sally",
		timeline: "Java is good not better than JS"
    }
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


function isUserValid(username, password){
	for (var i = 0; i < database.length; i++){
		if(database[i].username === username && 
			database[i].password === password){
			return true;
		}
	}
	return false;		
}



function signIn(username, password){
	if (isUserValid(username, password)){
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong usrname and password");
	}
}
	
	


signIn(usernamePrompt, passwordPrompt);

// var todos = ["clean room", "brush teeth", "excersise", "23", 23];

// for (var i=0; i < todos.length; i++)
// {
// 	console.log(todos[i], i);

// }

// // todos.forEach(function(todo, i)
// // {
// // 	console.log(todo, i);
// // });

// function logTodos(todo, i)
// {
// 	console.log(todo, i);
// }

// todos.forEach(logTodos);



// var counterOne = 0;
// while(counterOne < 10){
// 	console.log(counterOne);
// 	counterOne++
// };

// var counterOne = 10;
// // while(counterOne > 0){
// // 	console.log(counterOne);
// // 	counterOne--
// // };

// do {
// 	console.log(counterOne);
// 	counterOne --;
// } while (counterOne > 0);
