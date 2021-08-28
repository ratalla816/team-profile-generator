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
 
},    

];

const internPrompts = [

{

},    

];

const managerPrompts = [

{

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
}

// Function call to initialize app*
init();