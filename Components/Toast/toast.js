var x = document.getElementById("snackbar");
var btn_success = document.querySelector("#toast-btn-success");

btn_success.addEventListener("click", () => {
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
});
