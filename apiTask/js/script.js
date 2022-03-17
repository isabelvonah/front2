data = {}

function generate() {
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then((data) => {
    console.log(data.results)
    document.getElementById("profilePic").src = data.results[0].picture.large;
    document.getElementById("name").innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    document.getElementById("username").innerHTML = "<strong>Username: </strong>" + data.results[0].login.username;
    document.getElementById("email").innerHTML = "<strong>Mail: </strong>" + data.results[0].email;
    document.getElementById("age").innerHTML = "<strong>Alter: </strong>" + data.results[0].dob.age;
  });
}


