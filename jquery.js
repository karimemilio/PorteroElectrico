$(document).ready(function () {
  $("#colormode").click(function () {
    $("*").toggleClass("light-mode");
    let modoActual = $("#colormode").text();
    if (modoActual == "Light mode") {
      $("#colormode").text("Dark mode");
    } else {
      $("#colormode").text("Light mode");
    }
  });
  $("#admin").click(function () {
    $(".loginform").toggleClass("on");
  });
});
