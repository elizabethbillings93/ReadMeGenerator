const inquirer = require('inquirer');
const fs = require('fs');
const answerQue= require('./README.md');
const promptUser=()=>{
return inquirer.prompt([
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'build',
    },
    {
      type: 'input',
      message: 'What problems does this solve?',
      name: 'problem',
    },
    {
      type: 'input',
      message: 'What did you learn?',
      name: 'learn',
    },
    {
      type: 'list',
      name:'fruit',
      message: 'What is your favorite fruit?',
      choices: ['strawberrie','banana','plum'],
    },
])
}
const init= () =>{
    promptUser()
    .then((answers)=>fs.appendFile('README.md',answerQue))
}
init();
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();