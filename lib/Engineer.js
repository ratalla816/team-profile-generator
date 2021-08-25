// engineer class EXTENDS emp class
// engineer’s NAME, ID, EMAIL, and GITHUB username

const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(job, id, name, email, github){
    this.job = "Engineer";
    this.github = github;
}

getGitub(){
return this.github;
}

}
module.exports = Engineer;