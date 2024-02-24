document.addEventListener("DOMContentLoaded", function () {
  // Encuentra todos los botones que deberían abrir un modal
  var modalToggles = document.querySelectorAll("[data-modal-toggle]");

  // Para cada botón, agrega un evento de clic que muestre el modal correspondiente
  modalToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var modalId = toggle.getAttribute("data-modal-toggle");
      var modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove("hidden");
      }
    });
  });

  // Encuentra todos los botones que deberían cerrar un modal
  var modalHides = document.querySelectorAll("[data-modal-hide]");

  // Para cada botón, agrega un evento de clic que oculte el modal correspondiente
  modalHides.forEach(function (hide) {
    hide.addEventListener("click", function () {
      var modalId = hide.getAttribute("data-modal-hide");
      var modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("hidden");
      }
    });
  });

  // Verifica si hay errores en el formulario
  var formErrors = document.querySelectorAll(".text-red-500.text-sm.italic");
  // Si hay errores, muestra el modal automáticamente
  if (formErrors.length > 0) {
    var modal = document.getElementById("authentication-modal");
    if (modal) {
      modal.classList.remove("hidden");
    }
  }
});
