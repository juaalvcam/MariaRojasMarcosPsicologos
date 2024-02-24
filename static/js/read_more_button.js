document.addEventListener("DOMContentLoaded", function () {
  const lineHeight = parseFloat(
    getComputedStyle(document.querySelector(".text-justify")).lineHeight
  );
  document.querySelectorAll(".leer-mas").forEach((button) => {
    button.addEventListener("click", () => {
      const textoOculto = button.previousElementSibling;
      const lines = parseInt(textoOculto.dataset.lines) + 3;
      const totalLines = Math.ceil(textoOculto.scrollHeight / lineHeight);
      if (lines <= totalLines) {
        textoOculto.dataset.lines = lines;
        textoOculto.style.height = `${lines * lineHeight}px`;
      } else {
        textoOculto.dataset.lines = 3;
        textoOculto.style.height = `${3 * lineHeight}px`;
      }
    });
  });
});
