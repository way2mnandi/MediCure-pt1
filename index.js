document.getElementById("clickshow").onclick = function () {
  setTimeout(() => {
    document.getElementById("showev").classList.add("visible");
  }, 600); // Adjusted for scroll timing
};
document.getElementById("more").onclick = function () {
  setTimeout(() => {
    document.getElementById("showmo").classList.add("visible");
  }, 600); // Adjusted for scroll timing
};
function preview(src) {
  document.getElementById("previewpict").src = src;
  document.getElementById("preview").style.display = "flex"; /*Lightbox function*/
}

function closepreview() {
  document.getElementById("preview").style.display = "none"; /*closes the lightbox*/
}

function acceptWelcome() {
  localStorage.setItem("welcomeAccepted", "yes");
  document.getElementById("welcomeModal").style.display = "none";
}

function denyWelcome() {
  // Change this to your own page if needed:
  window.location.href = "index.html";
}

window.onload = function () {
  const accepted = localStorage.getItem("welcomeAccepted");
  if (!accepted) {
    document.getElementById("welcomeModal").style.display = "flex";
  }
};
document.getElementById("showthecart").onclick = function () {
  document.getElementById("htmlcart").classList.add("visible")
}
function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;

  if (username === "" || password === "") {
    document.getElementById("regMessage").style.color = "red";
    document.getElementById("regMessage").textContent = "All fields are required.";
    return;
  }

  // Get existing users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check for duplicate username
  const exists = storedUsers.find(user => user.username === username);
  if (exists) {
    document.getElementById("regMessage").style.color = "red";
    document.getElementById("regMessage").textContent = "Username already exists.";
    return;
  }

  // Add new user
  storedUsers.push({ username, password });
  localStorage.setItem("users", JSON.stringify(storedUsers));

  document.getElementById("regMessage").style.color = "green";
  document.getElementById("regMessage").textContent = "Registration successful. You can now log in!";
  document.querySelector("form").reset();
}
function loginUser(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const valid = storedUsers.find(u => u.username === user && u.password === pass);

  if (valid) {
    localStorage.setItem("loggedInUser", user);
    window.location.href = "index.html";
  } else {
    document.getElementById("loginMessage").textContent = "Invalid login.";
  }
}