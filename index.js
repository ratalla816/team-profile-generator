
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
            message: "Please enter their Github username.",
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
            name: 'buildEmployeeConfirm',
            message: 'Add another teammate?',
        }
    ])
    .then(userInput => {
        // Selects the data sets for each employee class

        let { name, id, email, role, github, school, buildEmployeeConfirm } = userInput; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

         } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }
        // pushes newly built employee to employArray
        employArray.push(employee); 

        if (buildEmployeeConfirm) {
            return buildEmployee(employArray); 
        } else {
            return employArray;
        }
    })

};


// If user chooses not to buildEmployee then index file is written 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
          if (err) {
            console.log(err);
            return;
        } else {
            console.log("Check out your spiffy new index.html file!")
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
