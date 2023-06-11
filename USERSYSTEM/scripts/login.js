function login() {
  console.log("login");

  //get the values from the HTML inputs
  let email = $("#txtEmail").val();
  let password = $("#txtPassword").val();
  console.log(email, password);

  //get the users from LS
  let users = readUsers();

  //for loop to travel the array [we were doing it under users.js]
  for (let index = 0; index < users.length; index++) {
    let user = users[index];
    console.log(user);
    if (email == user.email && password == user.password) {
      window.location = "users.html";
    } else {
      console.log("Invalid credentials");
    }
  }
  //display the user in the console
}

function init() {
  //hook event
  $("#btnLogin").click(login);
}
window.onload = init;
