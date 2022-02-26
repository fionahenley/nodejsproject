// packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown.js");

//questions for user
console.log("hi")
 var questions = [
    {
        type: "input",
        name: "username",
        message: "Hi, Welcome! What is your name?"
        
    },
    {
        type: "input",
        name: "email",
        message: "Nice to meet you. What is your preferred email for contact?"
        
    },
    {
        type: "input",
        name: "github",
        message: "Great! What is your Github Username?"
       
    },
    {
        type: "input",
        name: "repo",
        message: "What will the name of your Repository be called?"
       
    },
    {
        type: "input",
        name: "file",
        message: "What will the name of your File be called?"
       
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about?"
        
    },
    {
        type: "list",
        name: "license" ,
        message: "Lets apply the appropriate licensing for your project. Using arrow keys, you can select the license for your project. ",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause License", "BSD 3-Clause License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
  
    
 ]
//  .then((answers) => {
//     console.log(answers);
//  }); 

//function to write README file
 function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}


// function to initialize program
function init() {
 inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers))
    writeToFile("README.md", generateMarkdown({...answers}) )
 })}

// //function call to initialize program
 init();
