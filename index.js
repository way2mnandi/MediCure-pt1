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
