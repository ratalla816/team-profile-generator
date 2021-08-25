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
const validation = require("validation");
// async function
const writeFileAsync = src.promisify(fs.writeFile);
const appendFileAsync = src.promisify(fs.appendFile);

let employArray = [];

async function init(){
try{
await prompt()
// for loop iterates over each employee in the array 
for (let i = 0; i < employArray.length; i++) {
   employString = employString + html.renderProfile(employArray[i]);
}

// template literal 
let employString = ``;
let renderHTML = generateHTML(employString)
fs.writeFileAsync("./dist/index.html", renderHTML)

} catch (err) {
return console.log(err);
}
};

// PROMPT BUCKET #1
async function prompt() {
    let response = "";
    do{
    try{ console.log("/n----------------n/");
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
choices: ["Engineer","Intern", "Manager"]
}
// end of question array //
]);
}    

// PROMPT BUCKET #2
finally response = "";
if (response.role === "Engineer"){
response2 = await inquirer.prompt([
{
type: "input",
name: "name",
message: "Enter Github username",
}
]);
const engineer = new Engineer
// ENGINEER PROTOTYPE CREATED - push to array
(response.name, response.id, response.email, response2.x);
employArray.push(engineer);

}else if (response.role === "Intern"){
response2 = await inquirer.prompt([
{
type: "input",
name: "name",
message: "What school are they attending?",
}
]);
const intern = new Intern
// INTERN PROTOTYPE CREATED - push to array 
(response.name, response.id, response.email, response2.x);
employArray.push(intern);

}else if (response.role === "Manager"){
response2 = await inquirer.prompt([
{
type: "input",
name: "name",
message: "Office number?",
}    
]);
const manager = new Manager
// MANAGER PROTOTYPE CREATED - push to array 
(response.name, response.id, response.email, response2.x);
employArray.push(manager);
}
  
teamComplete = inquirer.prompt([
{
type: "list",
message: "Would you like to add more employees?",
name: "completed",
choices: ["YES", "NO"]
}
]);

// if user chooses "YES" the WHILE function will continue running the program
}while (teamComplete.completed === "yes");

// Function call to initialize app*
init();
}


