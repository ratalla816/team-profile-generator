// mgr class EXTENDS emp class
// team manager’s NAME, ID, EMAIL, and OFFICE NUMBER

const Employee = require("./Employee")
class Manager extends Employee {
    constructor(job, id, name, email, office){
    this.job = "Manager";
    this.school = office;
}

getGitub(){
return this.office;
}

}
module.exports = Intern;