window.addEventListener("DOMContentLoaded", (event) => {
  // Muestra la primera imagen al cargar la página
  const carouselItems = document.querySelectorAll("[data-carousel-item]");
  carouselItems[0].classList.remove("hidden");

  // Cambia a la siguiente imagen cuando se hace clic en los controles del carrusel
  const nextButton = document.querySelector("[data-carousel-next]");
  const prevButton = document.querySelector("[data-carousel-prev]");
  let currentIndex = 0;

  nextButton.addEventListener("click", () => {
    carouselItems[currentIndex].classList.add("hidden");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.remove("hidden");
  });

  prevButton.addEventListener("click", () => {
    carouselItems[currentIndex].classList.add("hidden");
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentIndex].classList.remove("hidden");
  });

  // Cambia a la imagen seleccionada cuando se hace clic en los indicadores del carrusel
  const indicatorButtons = document.querySelectorAll(
    "[data-carousel-slide-to]"
  );
  indicatorButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      carouselItems[currentIndex].classList.add("hidden");
      currentIndex = index;
      carouselItems[currentIndex].classList.remove("hidden");
    });
  });

  // Transición automática
  setInterval(() => {
    carouselItems[currentIndex].classList.add("hidden");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.remove("hidden");
  }, 8000);
});
