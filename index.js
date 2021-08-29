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
    name: "officeNumber",
    message: "Please enter the manager's office number.",
}
]
  
// end of question array //

const employArray = [];

    
// CREDIT: Nathan Szurek (Tutor), Calvin Freese (TA), Kelsey Gasser (TA) Brian Wilde (Classmate)
    const buildManager = () => {
     return inquirer.prompt(managerPrompts)
    .then((prompts) => {
        const manager = new Manager(prompts.name, prompts.id, prompts.email, prompts.officeNumber);
        employArray.push(manager);
        console.log(manager)
                  
                
    })  
};

const buildEmployee = () => {
    
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please select their role",
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
            name: 'confirmBuildEmployee',
            message: 'Add another teammember?',
        }
    ])
    .then(employeeData => {
        // Selects the data sets for each employee class

        let { name, id, email, role, github, school, confirmBuildEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }
        // pushes newly built employee to employArray
        employArray.push(employee); 

        if (confirmBuildEmployee) {
            return buildEmployee(employArray); 
        } else {
            return employArray;
        }
    })

};


// If user chooses not to buildEmployee then index file is written 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Check out your spiffy new index file!")
        }
    })
}; 

buildManager()
// callback to execute when the Promise is resolved.
  .then(buildEmployee)
  .then(employArray => {
// callback to execute when the Promise is rejected.      
    return generateHTML(employArray);
  })
  .then(finalHTML => {
 // Promise for the completion of which ever callback is executed     
    return writeFile(finalHTML);
  })
  .catch(err => {
 console.log(err);
  });
