document.addEventListener("DOMContentLoaded", function () {
  let groups = document.querySelectorAll(".group");
  groups.forEach(function (group) {
    let button = group.querySelector("button");
    let dropdown = group.querySelector("div");

    // Establecer inicialmente el desplegable como cerrado
    dropdown.style.display = "none";

    button.addEventListener("click", function () {
      let isShown = dropdown.style.display === "block";
      dropdown.style.display = isShown ? "none" : "block";
    });
    document.addEventListener("click", function (event) {
      if (!group.contains(event.target)) {
        dropdown.style.display = "none";
      }
    });
  });
});
