const ADMIN_USER='admin';
const ADMIN_PASS='admin123';
document.getElementById('loginForm').onsubmit=e=>{
e.preventDefault();
if(username.value===ADMIN_USER && password.value===ADMIN_PASS){
sessionStorage.setItem('isAdminLoggedIn','true');
location.href='admin.html';
}else error.textContent='Invalid credentials';
};