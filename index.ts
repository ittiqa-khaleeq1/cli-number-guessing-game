#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
	{
		name: "userGuessedNumber",
		type: "number",
		message: "Please select a number between 1-6: ",
	}
]);

if (answers.userGuessedNumber === randomNumber) {
	console.log("Congratulations! You nailed it! You guessed the right number.");
} else {
	console.log("Oops! You guessed the wrong number. Better luck Next time!");
}