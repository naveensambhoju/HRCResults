const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

document.getElementById("loginForm").onsubmit = (e) => {
  e.preventDefault();

  const enteredUser = username.value.trim().toLowerCase();
  const enteredPass = password.value.trim().toLowerCase();

  if (
    enteredUser === ADMIN_USER.toLowerCase() &&
    enteredPass === ADMIN_PASS.toLowerCase()
  ) {
    sessionStorage.setItem("isAdminLoggedIn", "true");
    location.href = "admin.html";
  } else {
    error.textContent = "Invalid credentials";
  }
};
