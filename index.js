// stuff I will use: npm inquirer, Jest- employee values, async functions, try catch, console logs
// async await, promisify, else if, require (fs), writeFileAsync, validation??
// stuff I will need: THE SRC FILES!!!!, classes from lib, inquirer questions, template literals, team member array, the array index thing (let i = 0; i < array.length; i++)

//    _____
//   |A .  |
//   | / \ |
//   |( . )|
//   |  T  |
//   ---"--- 

// packages needed*
const html = require("./src/generateHTML.js");
const css = require("./src/generateCSS.js")
const inquirer = require("inquirer");
const fs = require("fs");
const dist = require("dist");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const validation = require("validation");
// async function
const writeFileAsync = src.promisify(fs.writeFile);
const appendFileAsync = src.promisify(fs.appendFile);

let employArray = [];
// template literal 
let employString = ``;

async function init(){
try{
await prompt()
// for loop iterates over each employee in the array 
for (let i = 0; i < employArray.length; i++) {
   employString = employString + html.renderProfile(employArray[i]);
}

let renderHTML = generateHTML(employString)
fs.writeFileAsync("./dist/index.html", renderHTML)

} catch 




}






}

// array of questions for user input*
{
    type: "input",
    name: "name",
    message: "Employee name?"
},

{
    type: "input",
    name: "id",
    message: "Employee ID"
},

{
    type: "input",
    name: "email",
    message: "Employee email address?"
},

{
    type: "list",
    message: "What what is the employee's role:",
    name: "role",
    choices: ["Engineer","Intern", "Manager"]
}


// end of question array //

// TODO: Create a function to initialize app*

// Function call to initialize app*
init();


// TODO: Include packages needed for this application
// const generateMarkdown =require("./utils/generateMarkdown.js");
// const inquirer = require("inquirer");
// const fs = require("fs");

// TODO: Create an array of questions for user input
// const questions = [
      
//     {
//         type: "input",
//         name: "title",
//         message: "Application title?"
//     },

//     {
//         type: "input",
//         name: "github",
//         message: "Enter your Github username."
//     },

//     {
//         type: "input",
//         name: "repo",
//         message: "Enter the name of your application Github repository."
//     },

//     {
//         type: "input",
//         name: "description",
//         message: "Enter a brief description of your application."
//     },
    
//    {
//         type: "input",
//         name: "description",
//         message: "Enter a brief description of your application."
//     },
    
//     {
//         type: "input",
//         name: "documentation",
//         message: "Describe the installation process and operating instructions."
//     },
    
//     {
//         type: "input",
//         name: "usage",
//         message: "How will your application be used?"
//     },

//     {
//         type: "input",
//         name: "screenshot",
//         message: "please enter relative path for your screenshot image."
//     },

//     {
//         type: "input",
//         name: "features",
//         message: "What are the main features of the application?"
//     },

//     {
//         type: "input",
//         name: "acknowledgements",
//         message: "Who contributed to this project?"
//     },

//     {
//         type: "list",
//         message: "what license are you using? ",
//         name: "license",
//         choices: ["AAL", "ISC", "MIT", "NTP", "W3C"]
//     },
     
      
//     {
//         type: "input",
//         name: "testing",
//         message: "What is the process used to test this application?"
//     },
    
  
//     {
//         type: "input",
//         name: "email",
//         message: "Enter your email address."
//     }
        
//     ];
// end of question array //

// TODO: Create a function to initialize app

// function init() {
//     inquirer.prompt(questions).then(function(userInput) {
        
//         const markdownString = generateMarkdown(userInput)

//         // TODO: Create a function to write README file
//         fs.writeFile('README.md', markdownString, function(err) {
//             if(err) {
//                 console.log(err)
//             }
//             else {
//                 console.log('Look at your spiffy new README!')
//             }
//         })
//     },

//     )}
    
// Function call to initialize app
// init();