// intern class EXTENDS emp class
//  intern’s NAME, ID, EMAIL, and SCHOOL

const Employee = require("./Employee")
class Intern extends Employee {
    constructor(name, id, email, school){
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
}

getGitub(){
return this.school;
}

}
module.exports = Intern;