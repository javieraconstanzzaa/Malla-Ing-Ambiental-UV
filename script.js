// Normalizamos los nombres para evitar fallos de tildes, mayúsculas o espacios
function normalizar(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

// Malla con claves y valores normalizados
const malla = {
  "fundamentos de matematica": ["calculo diferencial e integral", "dibujo para ingenieria", "practica vinculacion con el medio"],
  "desarrollo personal": ["etica profesional", "practica vinculacion con el medio"],
  "desafios de ingenieria tecnologia y sociedad": ["ingenieria innovacion y emprendimiento", "practica vinculacion con el medio"],
  "principios de computacion y programacion": ["practica vinculacion con el medio"],
  "fundamentos de fisica": ["fisica 1"],
  "calculo diferencial e integral": ["series y calculo en varias variables", "balances de materia", "bioestadistica"],
  "quimica general": ["quimica inorganica y ambiental", "quimica organica y ambiental", "balances de materia"],
  "biologia celular": ["organismo y medio ambiente", "biodiversidad"],
  "fisica 1": ["fisica 2", "mecanica de fluidos"],
  "idioma": ["ingles instrumental"],
  "series y calculo en varias variables": ["ecuaciones diferenciales y algebra lineal"],
  "dibujo para ingenieria": ["geomorfologia"],
  "organismo y medio ambiente": ["microbiologia ambiental"],
  "quimica inorganica y ambiental": ["bioquimica", "laboratorio de quimica ambiental"],
  "fisica 2": [],
  "etica profesional": ["participacion ambiental ciudadana"],
  "practica vinculacion con el medio": [],
  "quimica organica y ambiental": ["bioquimica", "laboratorio de quimica ambiental"],
  "geomorfologia": ["ordenamiento territorial"],
  "ecuaciones diferenciales y algebra lineal": ["mecanica de fluidos", "modelacion de sistemas"],
  "biodiversidad": ["fundamentos de ecologia"],
  "bioestadistica": ["fundamentos de ecologia"],
  "balances de materia": ["termodinamica", "modelacion de sistemas"],
  "bioquimica": ["ecotoxicologia", "microbiologia ambiental", "practica inicial", "legislacion ambiental", "economia ambiental"],
  "laboratorio de quimica ambiental": ["prevencion de riesgos", "economia ambiental", "legislacion ambiental"],
  "mecanica de fluidos": ["operaciones unitarias", "meteorologia y contaminacion atmosferica", "practica inicial", "legislacion ambiental", "economia ambiental"],
  "fundamentos de ecologia": ["ecotoxicologia", "economia ambiental", "legislacion ambiental", "practica inicial"],
  "ordenamiento territorial": ["participacion ambiental ciudadana", "impactos ambientales", "manejo integrado de cuencas 1"],
  "termodinamica": ["operaciones unitarias"],
  "ecotoxicologia": ["tipe 1"],
  "operaciones unitarias": ["impactos ambientales", "ingenieria y gestion de residuos", "tipe 1", "gestion energetica"],
  "modelacion de sistemas": ["ingenieria y gestion de residuos", "tipe 1"],
  "meteorologia y contaminacion atmosferica": ["tipe 1"],
  "microbiologia ambiental": ["ingenieria y gestion de residuos"],
  "prevencion de riesgos": [],
  "ingles instrumental": [],
  "participacion ambiental ciudadana": ["trabajo de titulo 1", "electivo profesional 1", "practica profesional"],
  "impactos ambientales": ["manejo de los recursos naturales", "trabajo de titulo 1", "electivo profesional 1", "practica profesional"],
  "manejo integrado de cuencas 1": ["manejo de cuencas 2", "tipe 1", "electivo profesional 1", "practica profesional"],
  "ingenieria y gestion de residuos": ["electivo profesional 1", "trabajo de titulo 1", "practica profesional"],
  "economia ambiental": ["manejo de los recursos naturales", "organizacion y evaluacion de proyectos"],
  "legislacion ambiental": [],
  "tipe 1": ["tipe 2"],
  "practica inicial": [],
  "manejo de los recursos naturales": ["trabajo de titulo 2"],
  "manejo integrado de cuencas 2": ["trabajo de titulo 2"],
  "organizacion y evaluacion de proyectos": ["sistemas de gestion ambiental", "trabajo de titulo 2"],
  "gestion energetica": ["sostenibilidad y eficiencia ambiental", "sistemas de gestion ambiental", "trabajo de titulo 2"],
  "trabajo de titulo 1": [],
  "electivo profesional 1": ["electivo profesional 2"],
  "tipe 2": [],
  "sostenibilidad y eficiencia ambiental": [],
  "sistemas de gestion ambiental": [],
  "electivo profesional 2": [],
  "trabajo de titulo 2": [],
  "practica profesional": []
};

// Lista de ramos por semestre (nombres tal cual se muestran)
const semestres = [
  ["Fundamentos de matemática", "Desarrollo Personal", "Desafíos de Ingeniería, Tecnología y Sociedad", "Principios de computación y programación", "Fundamentos de física"],
  ["Cálculo diferencial e integral", "Química general", "Ingeniería, innovación y emprendimiento", "Biología Celular", "Física 1", "Idioma"],
  ["Series y cálculo en varias variables", "Dibujo para Ingeniería", "Organismo y medio ambiente", "Química inorgánica y ambiental", "Física 2", "Ética profesional", "Práctica vinculación con el medio"],
  ["Química orgánica y ambiental", "Geomorfología", "Ecuaciones diferenciales y álgebra lineal", "Biodiversidad", "Bioestadística", "Balances de materia"],
  ["Bioquímica", "Laboratorio de química ambiental", "Mecánica de fluidos", "Fundamentos de ecología", "Ordenamiento territorial", "Termodinámica"],
  ["Ecotoxicología", "Operaciones unitarias", "Modelación de sistemas", "Meteorología y contaminación atmosférica", "Microbiología ambiental", "Prevención de riesgos", "Inglés instrumental"],
  ["Participación ambiental ciudadana", "Impactos ambientales", "Manejo integrado de cuencas 1", "Ingeniería y gestión de residuos", "Economía ambiental", "Legislación ambiental", "TIPE 1", "Práctica inicial"],
  ["Manejo de los recursos naturales", "Manejo integrado de cuencas 2", "Organización y evaluación de proyectos", "Gestión energética", "Trabajo de título 1", "Electivo profesional 1", "TIPE 2"],
  ["Sostenibilidad y eficiencia ambiental", "Sistemas de gestión ambiental", "Electivo profesional 2", "Trabajo de título 2", "Práctica profesional"]
];

const aprobados = new Set();

function crearMalla() {
  const container = document.getElementById("malla-container");

  semestres.forEach((semestre, index) => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>Semestre ${index + 1}</h2>`;

    semestre.forEach(ramo => {
      const btn = document.createElement("button");
      btn.textContent = ramo;
      btn.className = "ramo bloqueado";
      if (index === 0) btn.className = "ramo"; // Habilitar primer semestre
      btn.onclick = () => toggleRamo(ramo, btn);
      div.appendChild(btn);
    });

    container.appendChild(div);
  });
}

function toggleRamo(ramo, btn) {
  const key = normalizar(ramo);
  if (aprobados.has(key)) {
    aprobados.delete(key);
    btn.classList.remove("aprobado");
  } else {
    aprobados.add(key);
    btn.classList.add("aprobado");
  }
  actualizarEstado();
}

function actualizarEstado() {
  const botones = document.querySelectorAll(".ramo");
  botones.forEach(btn => {
    const ramo = btn.textContent;
    const key = normalizar(ramo);

    // Buscar si algún ramo lo requiere
    const prereqs = Object.keys(malla).filter(k => malla[k].map(normalizar).includes(key));
    const desbloqueado = prereqs.every(p => aprobados.has(p)) || prereqs.length === 0;

    if (desbloqueado) {
      btn.classList.remove("bloqueado");
    } else {
      btn.classList.add("bloqueado");
    }
  });
}

crearMalla();
