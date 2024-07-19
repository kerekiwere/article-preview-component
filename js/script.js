const shareButton = document.getElementById("share");
const socialBar = document.getElementById("social");

shareButton.onclick = function () {
  socialBar.classList.toggle("active");
  shareButton.classList.toggle("active");
};
