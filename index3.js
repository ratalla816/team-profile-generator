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
const validator = require("email-validator");
const html = require("./src/generateHTML.js");
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
    choises: ["ADD ANOTHER ENGINEER", "ADD AN INTERN", "ADD A MANAGER", "MY TEAM IS COMPLETE"]
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
        choises: ["ADD ANOTHER INTERN", "ADD AN ENGINEER", "ADD A MANAGER", "MY TEAM IS COMPLETE"]
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
        name: "github",
        message: "Please enter the manager's office number.",
    },
    
    {
        type: "list",
        name: "continue",
        message: "How would you like to proceed?",
        choises: ["ADD ANOTHER MANAGER", "ADD AN ENGINEER", "ADD AN INTERN", "MY TEAM IS COMPLETE"]
    },  

];

// end of question array //

const employArray = [];

function init() {

    inquirer.prompt(engineerPrompts)
    .then(function () {
        if (addEmployee === true) {
            addEmployee()
        } else {

        }
    })
}

function addIntern() {

    inquirer.prompt(internPrompts)
    .then(function () {
        if (addEmployee === true) {
            addEmployee()
        } else {

        }
    })
}

function addManager() {

    inquirer.prompt(internPrompts)
    .then(function () {
        if (addManager === true) {
            addEmployee()
        } else {

        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
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