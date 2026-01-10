// admin.js

const textarea = document.getElementById("adminText");
const saveBtn = document.getElementById("save");
const logoutBtn = document.getElementById("logout");

const ADMIN_KEY = "MY_SECRET_KEY"; // for demo; set ADMIN_KEY env var on server for production

/* load existing content from file */
fetch("/content")
  .then((res) => res.json())
  .then((data) => {
    textarea.value = data.text || "";
  })
  .catch(() => {
    alert("Failed to load content");
  });

/* save content to file */
saveBtn.onclick = () => {
  fetch("/admin/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-admin-key": ADMIN_KEY,
    },
    body: JSON.stringify({ text: textarea.value }),
  })
    .then((res) => {
      if (!res.ok) throw new Error();
      alert("Saved successfully");
    })
    .catch(() => {
      alert("Save failed");
    });
};

/* logout */
logoutBtn.onclick = () => {
  sessionStorage.removeItem("isAdminLoggedIn");
  location.href = "login.html";
};
