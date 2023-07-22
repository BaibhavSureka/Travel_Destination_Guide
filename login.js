// login page
function redirectoindexpage() {
  setTimeout(function () {
    window.location.href = "index.html";
  }, 2000);
}

function showSuccessMessage() {
  var successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";
  setInterval(function () {
    successMessage.style.visibility = (successMessage.style.visibility === "hidden") ? "visible" : "hidden";
  }, 500);
}