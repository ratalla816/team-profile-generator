// intern class EXTENDS emp class
//  intern’s NAME, ID, EMAIL, and SCHOOL

const Employee = require("./Employee")
class Intern extends Employee {
    constructor(job, id, name, email, school){
    this.job = "Intern";
    this.school = school;
}

getGitub(){
return this.school;
}

}
module.exports = Intern;