let userfield = document.getElementById("username");
let passwordfield = document.getElementById("password");
let loginheader = document.getElementById("header");
let toggle = document.getElementById("toggle-login-reg");
let submitbutton = document.getElementById("submitbutton");

// If set to true, we are logging in, if set to false, we are registering
let login = true;

function tryLogin(event) {
  let username = userfield.value;
  let password = passwordfield.value;
  userfield.value = "";
  passwordfield.value = "";
}

function toggleLogin(event) {
  if (login) {
    login = false;
    toggle.innerText = "Login";
    loginheader.innerText = "Sign Up";
  } else {
    login = true;
    toggle.innerText = "Sign Up";
    loginheader.innerText = "Login";
  }
}

submitbutton.addEventListener("click", tryLogin);
toggle.addEventListener("click", toggleLogin);
