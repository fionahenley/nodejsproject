// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
//array of questions for user 
//const questions = [];
function askQuestion(){
inquirer.prompt([
    {
        type: "",
        message: "",
        name: ""
    },
    {
        type: "",
        message: "",
        name: ""
    },
    {
        type: "",
        message: "",
        name: ""
    },
    {
        type: "",
        message: "",
        name: ""
    },
    {
        type: "",
        message: "",
        name: ""
    },
    {
        type: "",
        message: "",
        name: ""
    },
    {
        type: "",
        message: "",
        name: ""
    },
    {
        type: "",
        message: "",
        name: ""
    },
    
]).then(function(answers){
    var strReadme = generateMarkdown(answers);
    writeToFile(answers, strReadme)
})

}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(response)
    fs.writeFile ('package.json' , JSON.stringify(response), err => (err)) 
    } error();(err) => {
        console.error(err)
    }






// TODO: Create a function to initialize app
function init() {
    askQuestion()
}






// Function call to initialize app
init();{

}
