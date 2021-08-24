// Step 1. create the employee class (all teammates === Employee)
class Employee {
    constructor(job, id, name, email){
    
    this.job = "job"
    this.id = id;
    this.name = name;
    this.email = email;
}

getJob(){
return this.job;
}

gitId(){
return this.id;
}

getName(){
return this.name;
} 

getEmail(){
return this.email;
}

}
module.exports = Employee;