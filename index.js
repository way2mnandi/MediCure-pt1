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
  document.getElementById("preview").style.display = "flex"; /*lightbox function*/
}

function closepreview() {
  document.getElementById("preview").style.display = "none"; /*closes the lightbox*/
}

function yes() {
  localStorage.setItem("clickyes", "yes");
  document.getElementById("homeprompt").style.display = "none";
}

function no() {
  window.location.href = "google.com";
}

window.onload = function () {
  const accepted = localStorage.getItem("clickyes");
  if (!accepted) {
    document.getElementById("homeprompt").style.display = "flex"; /* proceeds to page when yes is clicked and exits to google if not*/
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

  // gets existing users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // checks for duplicate username
  const exists = storedUsers.find(user => user.username === username);
  if (exists) {
    document.getElementById("regMessage").style.color = "red";
    document.getElementById("regMessage").textContent = "This username already exists, proceed to login";
    return;
  }

  // addiing new users
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
