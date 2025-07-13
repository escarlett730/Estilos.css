// script.js

document.addEventListener("DOMContentLoaded", function () {
  const malla = document.getElementById("malla");

  const ramos = [
    { id: "historia", nombre: "Historia de la psicología", prereqs: [] },
    { id: "neuro1", nombre: "Neurobiología aplicada a la psicología", prereqs: [] },
    { id: "desarrollo", nombre: "Psicología del desarrollo humano", prereqs: [] },
    { id: "metodologia", nombre: "Metodología de la investigación", prereqs: [] },
    { id: "filosofia", nombre: "Filosofía y psicología", prereqs: [] },
    { id: "introduccion", nombre: "Introducción a la psicología", prereqs: [] },
    { id: "com1", nombre: "Comunicación oral y escrita I", prereqs: [] },
    { id: "idioma1", nombre: "Idioma extranjero I", prereqs: [] },
    { id: "cognitivos1", nombre: "Procesos cognitivos I", prereqs: ["filosofia"] },
    { id: "com2", nombre: "Comunicación oral y escrita II", prereqs: ["com1"] },
    { id: "idioma2", nombre: "Idioma extranjero II", prereqs: ["idioma1"] },
    { id: "evalinteligencia", nombre: "Evaluación de la inteligencia", prereqs: ["neuro1"] },
    { id: "personalidad1", nombre: "Psicología de la personalidad I", prereqs: ["desarrollo"] },
    { id: "personalidad2", nombre: "Psicología de la personalidad II", prereqs: ["desarrollo"] },
    { id: "psicopatologiainf", nombre: "Psicopatología infanto juvenil", prereqs: ["desarrollo"] },
    { id: "educacional1", nombre: "Psicología educacional I", prereqs: ["desarrollo"] },
    { id: "social1", nombre: "Psicología social I", prereqs: ["metodologia"] },
    { id: "cualitativo", nombre: "Técnicas cualitativas", prereqs: ["metodologia"] },
    { id: "aprendizaje", nombre: "Procesos de aprendizaje básico", prereqs: ["cognitivos1"] },
    { id: "idioma3", nombre: "Idioma extranjero III", prereqs: ["idioma2"] },
    { id: "estadistica1", nombre: "Estadística I", prereqs: [] },
    { id: "estadistica2", nombre: "Estadística II", prereqs: ["estadistica1"] },
    // [... continuar con el resto de los ramos de manera similar ...]
  ];

  const estadoRamos = {};

  ramos.forEach(({ id, nombre }) => {
    const boton = document.createElement("button");
    boton.className = "ramo";
    boton.id = id;
    boton.textContent = nombre;
    boton.disabled = true;
    malla.appendChild(boton);
    estadoRamos[id] = { aprobado: false, boton };
  });

  function actualizarEstado() {
    ramos.forEach(({ id, prereqs }) => {
      if (!estadoRamos[id].aprobado) {
        const habilitado = prereqs.every(pr => estadoRamos[pr]?.aprobado);
        estadoRamos[id].boton.disabled = !habilitado;
      }
    });
  }

  ramos.forEach(({ id }) => {
    estadoRamos[id].boton.addEventListener("click", () => {
      estadoRamos[id].aprobado = true;
      estadoRamos[id].boton.classList.add("aprobado");
      estadoRamos[id].boton.disabled = true;
      actualizarEstado();
    });
  });

  // Habilitar los ramos sin prerequisitos inicialmente
  actualizarEstado();
});

