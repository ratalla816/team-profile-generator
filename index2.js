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
const html = require("./src/generateHTML.js");
const css = require("./src/generateCSS.js")
const inquirer = require("inquirer");
const fs = require("fs");
const dist = require("dist");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// figure out how to do this !!!
const validation = require("validation");
// async function
const writeFileAsync = dist.promisify(fs.writeFile);
const appendFileAsync = dist.promisify(fs.appendFile);

let employArray = [];

   function init() {
    try { await prompt()
        // for loop iterates over each employee in the array 
        for (let i = 0; i < employArray.length; i++) {
            // renderProfile is what I'm going to use to make the cards
            return employString = employString + html.renderProfile(employArray[i]);
        }

        // template literal 
        // OR stringify.json?
        let employString = ``;
        let renderHTML = generateHTML(employString)
        fs.writeFileAsync(renderHTML,"./dist/index.html")

    } catch (err) {
        throw (err);
    }
};

// PROMPT BUCKET #1
   function prompt() {
        let response = await inquirer.prompt([

                // array of questions for user input*
                {
                    type: "input",
                    name: "name",
                    message: "Employee name?"
                },

                {
                    type: "input",
                    name: "id",
                    message: "Employee ID?"
                },

                {
                    type: "input",
                    name: "email",
                    message: "Employee email address?"
                },

                {
                    type: "list",
                    message: "Employee role?",
                    name: "role",
                    choices: ["Engineer", "Intern", "Manager"]
                }
                // end of question array //
            ]);
        }

// PROMPT BUCKET #2

// HERE IS WHAT AARON SHOWED ME:
const inquirer = require('inquirer');
class Employee {
    constructor(name) {
        this.name = name
       }

    }

    const rob = new Employee('rob');

    const makeHtmlSnippet = (employee) => `
    <html>
        <body>
            <h1>hello ${employee.name || ''} lol</h1>
        </body>
    </html>
    `;

    const output = makeHtmlSnippet(rob);
// 

function addEngineer() {
    inquirer.prompt().then(  handle the answers, create new member, update the "state" )
}
// END AARONS CODE //

    let response = "";
        if (response.role === "Engineer") {
         let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter Github username",
                },
            ]);
            const engineer = new Engineer
                // ENGINEER CREATED - push to array
                (response.name, response.id, response.email, response);
                 employArray.push(engineer);

        } else if (response.role === "Intern") {
          let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What school are they attending?",
                },
            ]);
            const intern = new Intern
                // INTERN CREATED - push to array 
                (response.name, response.id, response.email, response);
                 employArray.push(intern);

        } else if (response.role === "Manager") {
          let response = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Office number?",
                },
            ]);
            const manager = new Manager
                // MANAGER CREATED - push to array 
                (response.name, response.id, response.email, response);
                 employArray.push(manager);
        }

        teamComplete = inquirer.prompt([
            {
                type: "list",
                message: "Would you like to add more employees?",
                name: "completed",
                choices: ["YES", "NO"]
            },
            
        ]);

        // if user chooses "YES" then continue running the program
       if (response.teamComplete === "YES")
    //    then ?? I don't know what goes here...
          console.log("\n-------------\n");
    
    // Function call to initialize app*
    init();



