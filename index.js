// // stuff I will use: npm inquirer, Jest- employee values, async functions, try catch, do try let, console logs
// // async await, promisify, else if, require (fs), writeFileAsync, validation??
// // stuff I will need: THE SRC FILES!!!!, classes from lib, inquirer questions, employee question bucket and role question buckets, template literals, team member array, the array index thing (let i = 0; i < array.length; i++)

// //    _____
// //   |A .  |
// //   | / \ |
// //   |( . )|
// //   |  T  |
// //   ---"--- 

// // packages needed*
const generateHTML = require("./src/generateHTML.js")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const validator = require("email-validator");
const inquirer = require("inquirer");
const fs = require("fs");

 // array of questions for user input*
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

]
  
// end of question array //

const employArray = [];

    
// CREDIT: Nathan Szurek (Tutor), Calvin Freese (TA), Kelsey Gasser (TA) Brian Wilde (Classmate)
    const buildManager = () => {
     return inquirer.prompt(managerPrompts)
    .then((prompts) => {
        const manager = new Manager(prompts.name, prompts.id, prompts.email, prompts.office);
        employArray.push(manager);
        console.log(manager)
                  
                
    })  
};

const addEmployee = () => {
    console.log(`Adding additional teammates `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's full name", 
        },

        {
            type: 'input',
            name: 'id',
            message: "Please enter their employee ID.",
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address.",
        },

        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's Github username.",
            when: (input) => input.role === "Engineer",
        },
        
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern attending?",
            when: (input) => input.role === "Intern",
        },

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Add another teammember?',
            default: false
        }
    ])
    

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Look at your spiffy new index file!")
        }
    })
}; 


  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });







