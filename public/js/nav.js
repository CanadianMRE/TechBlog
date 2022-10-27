let homebutton = document.getElementById("home-button");
let dashboardbutton = document.getElementById("dashboard-button");
let loginbutton = document.getElementById("login-button");

function openLogin() {
  document.location.replace("/api/login");
}

function openHome() {
  document.location.replace("/");
}

function openDashboard() {
  document.location.replace("/api/dashboard");
}

homebutton.addEventListener("click", openHome);
dashboardbutton.addEventListener("click", openDashboard);
loginbutton.addEventListener("click", openLogin);
