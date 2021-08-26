// mgr class EXTENDS emp class
// team manager’s NAME, ID, EMAIL, and OFFICE NUMBER

const Employee = require("./Employee")
class Manager extends Employee {
    constructor(name, id, email, office){
    super(name, id, email);
    this.role = "Manager";
    this.officeNumber = officeNumber;
}

getOfficeNumber(){
return this.officeNumber;
}

}
module.exports = Manager;