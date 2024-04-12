#! /usr/bin/env node
//Program 1 Simple Command Line Operator
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter number 1", type: "number", name: "firstNumber" },
    { message: "Enter number 2", type: "number", name: "secondNumber" },
    { mesage: "select operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtration", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select a valid operator");
}
