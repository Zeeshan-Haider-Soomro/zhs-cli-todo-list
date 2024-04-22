#! usr/bin/env node

import inquirer from "inquirer";

let todos = [];

let condition = true;

while (condition) {
  let addTast = await inquirer.prompt([
    {
      name: "Todo",
      type: "input",
      message: "What you want to add on your Todo List?",
    },
    {
      name: "addMore",
      type: "confirm",
      message: "Do you want to add more?",
      default: "false",
    },
  ]);

  todos.push(addTast.Todo);
  condition = addTast.addMore;
  console.log(todos);
}

