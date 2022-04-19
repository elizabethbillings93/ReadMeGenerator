// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?',
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
  choices: ['strawberry','banana','plum']
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,data,(err)=>{
    if (err){
      return console.log(err);
    }else{
      return console.log("It worked!");
    }
  })
}
 

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(res){
  writeToFile("README.md",generateMarkdown(res));
});
};

// // Function call to initialize app
init();