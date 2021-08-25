// engineer class EXTENDS emp class
// engineer’s NAME, ID, EMAIL, and GITHUB username

const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(name, id, email, github){
    super(name, id, email);    
    this.role = "Engineer";
    this.github = github;
}

getGitub(){
return this.github;
}

}
module.exports = Engineer;