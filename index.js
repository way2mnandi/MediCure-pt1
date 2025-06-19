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