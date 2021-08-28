// stuff I will use: npm inquirer, Jest- employee values, async functions, try catch, do try let, console logs
// async await, promisify, else if, require (fs), writeFileAsync, validation??
// stuff I will need: THE SRC FILES!!!!, classes from lib, inquirer questions, employee question bucket and role question buckets, template literals, team member array, the array index thing (let i = 0; i < array.length; i++)

//    _____
//   |A .  |
//   | / \ |
//   |( . )|
//   |  T  |
//   ---"--- 

// packages needed*
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const validator = require("email-validator");
const generate = require("./src/generateHTML.js");
const inquirer = require("inquirer");
const fs = require("fs");

 // array of questions for user input*
const engineerPrompts = [

{
    type: "input",
    name: "name",
    message: "Please enter the engineer's full name.",
},    

{
    type: "input",
    name: "id",
    message: "Please enter the engineer's employee ID.",
},

{
    type: "input",
    name: "email",
    message: "Please enter the engineer's email address.",
},

{
    type: "input",
    name: "github",
    message: "Please enter the engineer's Github username.",
},

{
    type: "list",
    name: "continue",
    message: "How would you like to proceed?",
    choices: ["ADD AN ENGINEER", "ADD AN INTERN", "ADD A MANAGER", "MY TEAM IS COMPLETE"]
},

];

const internPrompts = [

    {
        type: "input",
        name: "name",
        message: "Please enter the intern's full name.",
    },    
    
    {
        type: "input",
        name: "id",
        message: "Please enter the intern's employee ID.",
    },
    
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email address.",
    },
    
    {
        type: "input",
        name: "school",
        message: "Please enter the name of the school the intern attends.",
    },
    
    {
        type: "list",
        name: "continue",
        message: "How would you like to proceed?",
        choices: ["ADD AN ENGINEER", "ADD AN INTERN", "ADD A MANAGER", "MY TEAM IS COMPLETE"]
    },

];

const managerPrompts = [

    {
        type: "input",
        name: "name",
        message: "Please enter the manager's full name.",
    },    
    
    {
        type: "input",
        name: "id",
        message: "Please enter the manager's employee ID.",
    },
    
    {
        type: "input",
        name: "email",
        message: "Please enter the manager's email address.",
    },
    
    {
        type: "input",
        name: "office",
        message: "Please enter the manager's office number.",
    },
    
    {
        type: "list",
        name: "continue",
        message: "How would you like to proceed?",
        choices: ["ADD AN ENGINEER", "ADD AN INTERN", "ADD A MANAGER", "MY TEAM IS COMPLETE"]
    },  

];

// end of question array //

const employArray = [];
// CREDIT: Nathan Szurek (Tutor), Calvin Freese (TA), Kelsey Gasser (TA)
function init() {

    inquirer.prompt(engineerPrompts)
    .then(prompts => {
        const engineer = new Engineer(prompts.name, prompts.id, prompts.email, prompts.github);
        employArray.push(engineer);
        if (prompts.continue === "ADD AN INTERN") {
            addIntern();

        } else if (prompts.continue === "ADD A MANAGER") {
            addManager();
        } else {
            completeHTML(employArray)
        

        }
    })   
}
function addIntern() {
    inquirer.prompt(internPrompts)
    .then(prompts => {
        const intern = new Intern(prompts.name, prompts.id, prompts.email, prompts.school);
        employArray.push(intern);
        if (prompts.continue === "ADD AN ENGINEER") {
            addEngineer();

        } else if (prompts.continue === "ADD A MANAGER") {
                addManager();
        } else {
            completeHTML(employArray)

    }
    })
}
function addManager() {
    inquirer.prompt(managerPrompts)
    .then(prompts => {
        const manager = new Manager(prompts.name, prompts.id, prompts.email, prompts.office);
        employArray.push(manager);
        if (prompts.continue === "ADD AN INTERN") {
            addIntern();

        } else if (prompts.continue === "ADD AN ENGINEER") {
                addEngineer();
        } else {
         completeHTML(employArray)

        }
    })
}


// readme generator code:
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

const writeFile = data => {
    fs.writeFile('./dist/index.html', generate.data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Check out your spiffy new team profile!!")
        }
    })
}; 

// Function call to initialize app*
init();