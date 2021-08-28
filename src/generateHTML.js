const generateHTML= (data) => {

return `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Weather Dashboard</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="stylesheet" href="./dist/style.css">
</head>
<body>

<section class="hero">
    <div class="hero-excel">
      <h1>Team Profile Generator</h1>
      <p>
      <h2>Cool stuff about your team edit this later!</h2>
      </p>
    </div>
    <br>
    </div>
  </section>
  <br>
  <div>
	<div>  
       <div class="container-fluid">
	   </div>
       <main class="col-12 col-lg-9 d-flex flex-column ">
      <div class="m-5 row justify-content-around">
          <!--  -->
          <div class="col-12 col-md-6 col-xl-3 mb-3">
            <div class="card">
              <h4 class="card-header bg-dark text-light d-flex align-items-center">
                Engineer
                ${data.name}
                ${data.id}
                ${data.email}
                ${data.github}
              </h4>
              <ul id="list-addEngineer" class="list-group list-group-flush">
              </ul>
            </div>
          </div>
          <!--  -->
           <div class="col-12 col-md-6 col-xl-3 mb-3">
            <div class="card">
              <h4 class="card-header bg-dark text-light d-flex align-items-center">
                Intern
                ${data.name}
                ${data.id}
                ${data.email}
                ${data.school}
              </h4>
              <ul id="list-addIntern" class="list-group list-group-flush">
              </ul>
            </div>
          </div>
          <!--  -->
          <div class="col-12 col-md-6 col-xl-3 mb-3">
            <div class="card">
              <h4 class="card-header bg-dark text-light d-flex align-items-center">
                Manager
                ${data.name}
                ${data.id}
                ${data.email}
                ${data.office}
              </h4>
              <ul id="list-addManager" class="list-group list-group-flush">
              </ul>
            </div>
          </div>
 



<script src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://unpkg.com/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>

</body>


</html>`
}

module.exports = {generateHTML}