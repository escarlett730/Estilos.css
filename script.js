// Aquí defines toda la malla con los ramos y sus prerrequisitos por ID
const ramos = [
  { id: "historia", nombre: "Historia de la psicología y sistemas psicológicos", prerreq: [], semestre: "I Semestre" },
  { id: "neurobiologia", nombre: "Neurobiología aplicada a la psicología", prerreq: [], semestre: "I Semestre" },
  { id: "desarrollo", nombre: "Psicología del desarrollo humano", prerreq: [], semestre: "I Semestre" },
  { id: "metodologia", nombre: "Metodología de la investigación en psicología", prerreq: [], semestre: "I Semestre" },
  { id: "filosofia", nombre: "Filosofía y psicología", prerreq: [], semestre: "I Semestre" },
  { id: "procesos1", nombre: "Procesos cognitivos I", prerreq: ["filosofia"], semestre: "II Semestre" },
  { id: "introduccion", nombre: "Introducción a la psicología y su praxis", prerreq: [], semestre: "I Semestre" },
  { id: "comunicacion1", nombre: "Comunicación oral y escrita I", prerreq: [], semestre: "I Semestre" },
  { id: "comunicacion2", nombre: "Comunicación oral y escrita II", prerreq: ["comunicacion1"], semestre: "II Semestre" },
  { id: "idioma1", nombre: "Idioma extranjero I", prerreq: [], semestre: "I Semestre" },
  { id: "idioma2", nombre: "Idioma extranjero II", prerreq: ["idioma1"], semestre: "II Semestre" },
  { id: "idioma3", nombre: "Idioma extranjero III", prerreq: ["idioma2"], semestre: "III Semestre" },
  { id: "evalinteligencia", nombre: "Evaluación de la inteligencia y procesos neuropsicológicos", prerreq: ["neurobiologia"], semestre: "III Semestre" },
  { id: "personalidad1", nombre: "Psicología de la personalidad I", prerreq: ["desarrollo"], semestre: "III Semestre" },
  { id: "personalidad2", nombre: "Psicología de la personalidad II", prerreq: ["desarrollo"], semestre: "IV Semestre" },
  { id: "infantojuvenil", nombre: "Psicopatología infanto juvenil", prerreq: ["desarrollo"], semestre: "V Semestre" },
  { id: "educacional1", nombre: "Psicología educacional I", prerreq: ["desarrollo", "procesos2"], semestre: "VI Semestre" },
  { id: "social1", nombre: "Psicología social I: Pensamiento social", prerreq: ["metodologia"], semestre: "III Semestre" },
  { id: "social2", nombre: "Psicología social II: Actitudes y comportamiento", prerreq: ["social1"], semestre: "IV Semestre" },
  { id: "social3", nombre: "Psicología social III: Grupos, colectivos y ambientes", prerreq: ["social2"], semestre: "V Semestre" },
  { id: "aprendizaje", nombre: "Procesos de aprendizaje básico", prerreq: ["procesos1"], semestre: "III Semestre" },
  { id: "memoria", nombre: "Memoria humana", prerreq: ["aprendizaje"], semestre: "IV Semestre" },
  { id: "procesos2", nombre: "Procesos cognitivos II", prerreq: ["memoria"], semestre: "V Semestre" },
  { id: "recoleccion", nombre: "Técnicas de recolección y análisis de datos cualitativos", prerreq: ["metodologia"], semestre: "V Semestre" },
  { id: "estadistica1", nombre: "Técnicas de análisis estadísticos en psicología I", prerreq: [], semestre: "II Semestre" },
  { id: "estadistica2", nombre: "Técnicas de análisis estadísticos en psicología II", prerreq: ["estadistica1"], semestre: "III Semestre" },
  { id: "teoria1", nombre: "Teoría y construcción de pruebas psicológicas I", prerreq: ["estadistica2"], semestre: "IV Semestre" },
  { id: "teoria2", nombre: "Teoría y construcción de pruebas psicológicas II", prerreq: ["teoria1"], semestre: "V Semestre" },
  { id: "eval1", nombre: "Evaluación de la personalidad I", prerreq: ["personalidad1"], semestre: "IV Semestre" },
  { id: "eval2", nombre: "Evaluación de la personalidad II", prerreq: ["personalidad2"], semestre: "V Semestre" },
  { id: "psicodiagnostico", nombre: "Taller de psicodiagnóstico y evaluación", prerreq: ["personalidad2", "psicoadultos"], semestre: "VII Semestre" },
  { id: "psicoadultos", nombre: "Psicopatología de adultos", prerreq: ["personalidad2"], semestre: "VI Semestre" },
  { id: "neuropsiquiatria", nombre: "Neuropsiquiatría y psicofarmacología", prerreq: ["evalinteligencia", "psicoadultos"], semestre: "VIII Semestre" },
  { id: "psicoterapia1", nombre: "Fundamentos de psicoterapia I", prerreq: ["intervencion1"], semestre: "VI Semestre" },
  { id: "psicoterapia2", nombre: "Fundamentos de psicoterapia II", prerreq: ["psicoterapia1"], semestre: "VII Semestre" },
  { id: "intervencion1", nombre: "Técnicas de intervención individual", prerreq: ["social1"], semestre: "V Semestre" },
  { id: "intervencion2", nombre: "Técnicas de intervención grupal", prerreq: ["intervencion1", "social3"], semestre: "VI Semestre" },
  { id: "trabajo", nombre: "Psicología del trabajo y las organizaciones I", prerreq: ["social2"], semestre: "V Semestre" },
  { id: "trabajo2", nombre: "Psicología del trabajo y las organizaciones II", prerreq: ["trabajo"], semestre: "VI Semestre" },
  { id: "desarrolloorg", nombre: "Desarrollo de competencias profesionales en el ámbito organizacional", prerreq: ["trabajo2", "intervencion2"], semestre: "VIII Semestre" },
  { id: "gestion", nombre: "Gestión estratégica de personas", prerreq: ["desarrolloorg"], semestre: "IX Semestre" },
  { id: "integracion1", nombre: "Módulo I de integración de competencias psicológicas: Investigación", prerreq: ["recoleccion", "teoria2"], semestre: "VI Semestre" },
  { id: "proyecto", nombre: "Proyecto de memoria", prerreq: ["integracion1"], semestre: "IX Semestre" },
  { id: "memoriafinal", nombre: "Memoria", prerreq: ["proyecto"], semestre: "X Semestre" }
  // Puedes seguir agregando el resto siguiendo el mismo formato
];

// Renderiza la malla
const container = document.getElementById("malla-container");

const semestres = [...new Set(ramos.map(r => r.semestre))];
semestres.forEach(sem => {
  const title = document.createElement("div");
  title.className = "semestre-titulo";
  title.textContent = sem;
  container.appendChild(title);

  ramos
    .filter(r => r.semestre === sem)
    .forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo locked";
      div.textContent = ramo.nombre;
      div.dataset.id = ramo.id;
      div.dataset.prerreq = ramo.prerreq.join(",");
      container.appendChild(div);
    });
});

// Funcionalidad de desbloqueo
function updateRamos() {
  document.querySelectorAll(".ramo").forEach(ramo => {
    const prereqs = ramo.dataset.prerreq.split(",").filter(Boolean);
    const completos = prereqs.every(id =>
      document.querySelector(`.ramo[data-id="${id}"]`)?.classList.contains("completed")
    );
    if (prereqs.length === 0 || completos) {
      ramo.classList.remove("locked");
    } else {
      ramo.classList.add("locked");
    }
  });
}

document.querySelectorAll(".ramo").forEach(ramo => {
  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("locked")) return;
    ramo.classList.toggle("completed");
    updateRamos();
  });
});

updateRamos(); // Desbloquea los iniciales

