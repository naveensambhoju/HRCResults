const textarea=document.getElementById('adminText');
textarea.value=localStorage.getItem('homeText')||'';
document.getElementById('save').onclick=()=>{
localStorage.setItem('homeText',textarea.value);
alert('Saved');
};
logout.onclick=()=>{
sessionStorage.removeItem('isAdminLoggedIn');
location.href='login.html';
};