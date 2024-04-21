function changeContent(id) {
  const content = document.getElementById("content");
  // Limpia el contenido actual
  content.innerHTML = "";

  // Agrega el contenido correspondiente a la opción seleccionada
  switch (id) {
    case "program":
      content.innerHTML = `<div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-cyan-50 body-font bg-teal-950 rounded-lg border border-gray-100 shadow"<div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-cyan-50 body-font bg-teal-950 rounded-lg border border-gray-100 shadow"
          >
          <h3 class="mb-4 text-2xl font-semibold">
          Programa de reducción antiestrés
          </h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Programa integral para la reducción del estés
          </p>
          <div class="flex justify-center items-baseline my-8">
          <span class="mr-2 text-5xl font-extrabold">1120€</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Masaje antiestrés
              <span class="font-semibold">4 sesiones</span></span
            >
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Taller de reducción del estrés
              <span class="font-semibold">4 sesiones</span></span
            >
          </li>
          </ul>
          <a
          href="/contacto"
          class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
          >Pedir cita</a
          >
          </div>
          <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-cyan-50 body-font bg-teal-950 rounded-lg border border-gray-100 shadow"
          >
          <h3 class="mb-4 text-2xl font-semibold">
          Programa de reducción antiestrés II
          </h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Programa integral para la reducción del estés
          </p>
          <div class="flex justify-center items-baseline my-8">
          <span class="mr-2 text-5xl font-extrabold">2180€</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Masaje antiestrés
              <span class="font-semibold">4 sesiones</span></span
            >
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Terapia Psicológica
              <span class="font-semibold">4 sesiones</span></span
            >
          </li>
          </ul>
          <a
          href="/contacto"
          class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
          >Pedir cita</a
          >
          </div>
          <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-cyan-50 body-font bg-teal-950 rounded-lg border border-gray-100 shadow"
          >
          <h3 class="mb-4 text-2xl font-semibold">
          Programa de reducción antiestrés III
          </h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Programa integral para la reducción del estés
          </p>
          <div class="flex justify-center items-baseline my-8">
          <span class="mr-2 text-5xl font-extrabold">3240€</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Terapia Psicológica
              <span class="font-semibold">8 sesiones</span></span
            >
          </li>
          </ul>
          <a
          href="/contacto"
          class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
          >Pedir cita</a
          >
          </div>
          </div>`;
      break;
    case "session":
      content.innerHTML = `<div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-cyan-50 body-font bg-teal-950 rounded-lg border border-gray-100 shadow"
          >
          <!-- Sesiones -->
          <h3 class="mb-4 text-2xl font-semibold">Normal</h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Opción para la mayoría de los pacientes que quieren alcanzar bienestar
          emocional
          </p>
          <div class="flex justify-center items-baseline my-8">
          <span class="mr-2 text-5xl font-extrabold">70€</span>
          <span class="text-gray-500 dark:text-gray-400">/60€x4</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Posibilidad de bono:
              <span class="font-semibold">4 sesiones</span></span
            >
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Sesión Individual</span>
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Sesión Adolescentes</span>
          </li>

          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Neuropsicología</span>
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Autocuidado y Autoimagen</span>
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Coaching de la vida
              <span class="font-semibold">Nutricoach</span></span
            >
          </li>
          </ul>
          <a
          href="/contacto"
          class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
          >Pedir cita</a
          >
          </div>
          <!-- Pricing Card -->
          <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-cyan-50 body-font bg-teal-950 rounded-lg border border-gray-100 shadow"
          >
          <h3 class="mb-4 text-2xl font-semibold">Dobles</h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Sesiones especializadas en el tratamiento de las relaciones entre dos
          individuos
          </p>
          <div class="flex justify-center items-baseline my-8">
          <span class="mr-2 text-5xl font-extrabold">90€</span>
          <span class="text-gray-500 dark:text-gray-400">/75€x4</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Posibilidad de bono:
              <span class="font-semibold">4 sesiones</span></span
            >
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Terapia de Parejas</span>
          </li>
          </ul>
          <a
          href="/contacto"
          class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
          >Pedir cita</a
          >
          </div>
          <!-- Pricing Card -->
          <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-cyan-50 body-font bg-teal-950 rounded-lg border border-gray-100 shadow"
          >
          <h3 class="mb-4 text-2xl font-semibold">Adaptado</h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          Sesiones acomodades a necesidades especiales
          </p>
          <div class="flex justify-center items-baseline my-8">
          <span class="mr-2 text-5xl font-extrabold">60€</span>
          <span class="text-gray-500 dark:text-gray-400">/50€x4</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Posibilidad de bono:
              <span class="font-semibold">4 sesiones</span></span
            >
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Terapia Infantil
              <span class="font-semibold">45 minutos</span></span
            >
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Rehabilitación psicológica</span>
          </li>
          </ul>
          <a
          href="/contacto"
          class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
          >Pedir cita</a
          >
          </div>`;
      break;
  }
}
