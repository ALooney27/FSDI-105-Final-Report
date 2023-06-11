function displayUsers(usersArray) {
  // go to the pet salon project and display the users in the table

  let tr = "";
  const TABLE = document.getElementById("usersTable");

  for (let index = 0; index < usersArray.length; index++) {
    let user = usersArray[index];
    tr += `
  <tr class="table-row">
  <td>${user.email}</td>
  <td>${user.password}</td>
  <td>${user.firstName}</td>
  <td>${user.lastName}</td>
  <td>${user.age}</td>
  <td>${user.address}</td>
  <td>${user.phone}</td>
  <td>${user.payment}</td>
  <td>${user.color}</td>
  </tr>
  `;
  }
  TABLE.innerHTML = tr;
}

function init() {
  let users = readUsers();
  displayUsers(users);
}

window.onload = init;
