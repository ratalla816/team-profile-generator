
// profile cards
const createManager = function (manager) {
return`
    <div class="col-3 mt-5">
    <div class="card h-80">
    <div class="card-header">
         <h3>${manager.name}</h3>
         <h4>Manager</h4><i class="fas fa-briefcase"></i>
         </div>
         <div class="card-body">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
           </div>
       </div>
    </div>
   `
}

const createEngineer = function (engineer) {
return`
    <div class="col-3 mt-5">
    <div class="card h-80">
    <div class="card-header">
         <h3>${engineer.name}</h3>
         <h4>Engineer</h4><i class="fas fa-database"></i>
         </div>
         <div class="card-body">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
           </div>
        </div>
    </div>
    `
}

const createIntern = function (intern) {
return`
    <div class="col-3 mt-5">
    <div class="card h-80">
    <div class="card-header">
         <h3>${intern.name}</h3>
         <h4>Intern</h4><i class="fas fa-graduation-cap"></i>
         </div>
         <div class="card-body">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
};

 // array holds the profile data that will be displayed on the cards 
generateHTML = (data) => {

    profileArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerProfile = createManager(employee);
            profileArray.push(managerProfile);
        }

        if (role === 'Engineer') {
            const engineerProfile = createEngineer(employee);
            profileArray.push(engineerProfile);
        }

        if (role === 'Intern') {
            const internProfile = createIntern(employee);
            profileArray.push(internProfile);
        }
        
    }

    
    // profiles in the array are joined so the data can be rendered on the html page
    const employeeProfiles = profileArray.join('')

    const renderTeam = renderTeamPage(employeeProfiles); 
    return renderTeam;

}

// creating the index file with all the teammembers' profiles 
const renderTeamPage = function (employeeProfiles) {   

    return`
    <!DOCTYPE html>
<html>
<!--- _____
     |A .  |
     | / \ |
     |( . )|
     |  T  |
     ---"--- --->
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Le G??n??rateur de profil d'??quipe</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link rel="stylesheet" href="./dist/style.css">
 </head>
  <body>
    <header class="jumbotron">
           <h1 class="display-4 text-success bg-dark">Team Profile Generator</h1>
         </header>
       <main>
          <div class="container">
           <div class="row justify-content-center">
            ${employeeProfiles}
        </div>
    </div>
 </main>    
</body>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://unpkg.com/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
</html>
`

}

module.exports = generateHTML; 