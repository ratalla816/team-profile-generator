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
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const validator = require("email-validator");
const generate = require("./src/generateHTML.js")
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
      
];

// end of question array //

const employArray = [];

function init() {
    const proceed = () => {
        inquirer.prompt(
            {
                type: "confirm",
                name: "proceed",
                message: "would you like to add an employee to your team?",
                default: true,
            }
            // Yes - ask for employee type. No - writefile
        ).then((response) => {
            if (response.add === true) {
              addEmployee();
            } if (response.add === false) {
                console.log(employArray);
                getProfileHTML(employArray);
            }    
        })   
    }

    const addEmployee = () => {
        inquirer.prompt({
            type: 'list',
            name: 'employee',
            message: 'What type of employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern'],
        }).then((response) => {
            switch(response.employee) {
                case 'Engineer':
                    engineerPrompt();
                    break;
                case 'Intern':
                    internPrompt();
                    break;
                case 'Manager':
                    managerPrompt();
                    break;
            }
        });
    };

// CREDIT: Nathan Szurek (Tutor), Calvin Freese (TA), Kelsey Gasser (TA) Brian Wilde (Classmate)
    function addEngineer() {
     inquirer.prompt(engineerPrompts)
    .then((prompts) => {
        this.engineer = new Engineer(prompts.name, prompts.id, prompts.email, prompts.github);
        employArray.push(this.engineer);
         proceed();            
                
    })   
}

   function addIntern() {
    inquirer.prompt(internPrompts)
    .then((prompts) => {
        this.intern = new Intern(prompts.name, prompts.id, prompts.email, prompts.school);
        employArray.push(this.intern);
        proceed();
      
    })
}

   function addManager() {
    inquirer.prompt(managerPrompts)
    .then((prompts) => {
        this.manager = new Manager(prompts.name, prompts.id, prompts.email, prompts.office);
        employArray.push(this.manager);
        proceed();

    })
}

let profileHTML = '';

const getProfileHTML = (employArray) => {

    employArray = [];

    for (let i = 0; i < data.length; i++) {
       
        if (employArray[i].role(role === 'Engineer')) {
            profileHTML = profileHTML + engineerProfileHTML(employArray[i]);
            
        }

    if (employArray[i].role(role === 'Intern')) {
            profileHTML = profileHTML + internProfileHTML(employArray[i]);

        }


    if (employArray[i].role(role === 'Manager')) {
            profileHTML = profileHTML + managerProfileHTML(employArray[i]);

        }

    }


const writeFile = (finalHTML) => {
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

module.exports = profileHTML

