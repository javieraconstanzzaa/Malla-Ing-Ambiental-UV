const malla = {
  "Fundamentos de matemática": ["Cálculo Diferencial e Integral", "Dibujo para Ingeniería", "Práctica Vinculación con el Medio"],
  "Desarrollo Personal": ["Ética Profesional", "Práctica Vinculación con el Medio"],
  "Desafíos de Ingeniería, Tecnología y Sociedad": ["Ingeniería, innovación y emprendimiento", "Práctica Vinculación con el Medio"],
  "Principios de computación y programación": ["Práctica Vinculación con el Medio"],
  "Fundamentos de física": ["Física 1"],
  "Cálculo diferencial e integral": ["Series y cálculo en varias variables", "Balances de materia", "Bioestadística"],
  "Química general": ["Química inorgánica y ambiental", "Química orgánica y ambiental", "Balances de materia"],
  "Ingeniería, Innovación y Emprendimiento": [],
  "Biología Celular": ["Organismo y medio ambiente", "Biodiversidad"],
  "Física 1": ["Física 2", "Mecánica de fluidos"],
  "Idioma": ["Inglés instrumental"],
  "Series y Cálculo en Varias Variables": ["Ecuaciones diferenciales y álgebra lineal"],
  "Dibujo para Ingeniería": ["Geomorfología"],
  "Organismo y Medio Ambiente": ["Microbiología ambiental"],
  "Química Inorgánica y Ambiental": ["Bioquímica", "Laboratorio de química ambiental"],
  "Física 2": [],
  "Ética Profesional": ["Participación ambiental ciudadana"],
  "Práctica Vinculación con el Medio": [],
  "Química Orgánica y Ambiental": ["Bioquímica", "Laboratorio de química ambiental"],
  "Geomorfología": ["Ordenamiento territorial"],
  "Ecuaciones Diferenciales y Álgebra Lineal": ["Mecánica de fluidos", "Modelación de sistemas"],
  "Biodiversidad": ["Fundamentos de ecología"],
  "Bioestadística": ["Fundamentos de ecología"],
  "Balances de Materia": ["Termodinámica", "Modelación de sistemas"],
  "Bioquímica": ["Ecotoxicología", "Microbiología ambiental", "Práctica inicial", "Legislación ambiental", "Economía ambiental"],
  "Laboratorio de Química Ambiental": ["Prevención de riesgos", "Economía ambiental", "Legislación ambiental"],
  "Mecánica de Fluidos": ["Operaciones unitarias", "Meteorología y contaminación atmosférica", "Práctica inicial", "Legislación ambiental", "Economía ambiental"],
  "Fundamentos de Ecología": ["Ecotoxicología", "Economía ambiental", "Legislación ambiental", "Práctica inicial"],
  "Ordenamiento Territorial": ["Participación ambiental ciudadana", "Impactos ambientales", "Manejo integrado de cuencas 1"],
  "Termodinámica": ["Operaciones unitarias"],
  "Ecotoxicología": ["TIPE 1"],
  "Operaciones Unitarias": ["Impactos ambientales", "Ingeniería y gestión de residuos", "TIPE 1", "Gestión energética"],
  "Modelación de Sistemas": ["Ingeniería y gestión de residuos", "TIPE 1"],
  "Meteorología y Contaminación Atmosférica": ["TIPE 1"],
  "Microbiología Ambiental": ["Ingeniería y gestión de residuos"],
  "Prevención de Riesgos": [],
  "Inglés Instrumental": [],
  "Participación Ambiental Ciudadana": ["Trabajo de título 1", "Electivo profesional 1", "Práctica profesional"],
  "Impactos Ambientales": ["Manejo de los recursos naturales", "Trabajo de título 1", "Electivo profesional 1", "Práctica profesional"],
  "Manejo Integrado de Cuencas 1": ["Manejo de cuencas 2", "TIPE 1", "Electivo profesional 1", "Práctica profesional"],
  "Ingeniería y Gestión de Residuos": ["Electivo profesional 1", "Trabajo de título 1", "Práctica profesional"],
  "Economía Ambiental": ["Manejo de los recursos naturales", "Organización y evaluación de proyectos"],
  "Legislación Ambiental": [],
  "TIPE 1": ["TIPE 2"],
  "Práctica Inicial": [],
  "Manejo de los Recursos Naturales": ["Trabajo de título 2"],
  "Manejo Integrado de Cuencas 2": ["Trabajo de título 2"],
  "Organización y Evaluación de Proyectos": ["Sistemas de gestión ambiental", "Trabajo de título 2"],
  "Gestión Energética": ["Sostenibilidad y eficiencia ambiental", "Sistemas de gestión ambiental", "Trabajo de título 2"],
  "Trabajo de Título 1": [],
  "Electivo Profesional 1": ["Electivo profesional 2"],
  "TIPE 2": [],
  "Sostenibilidad y Eficiencia Ambiental": [],
  "Sistemas de Gestión Ambiental": [],
  "Electivo Profesional 2": [],
  "Trabajo de Título 2": [],
  "Práctica Profesional": []
};

const semestres = [
  ["Fundamentos de matemática", "Desarrollo Personal", "Desafíos de Ingeniería, Tecnología y Sociedad", "Principios de computación y programación", "Fundamentos de física"],
  ["Cálculo diferencial e integral", "Química general", "Ingeniería, Innovación y Emprendimiento", "Biología Celular", "Física 1", "Idioma"],
  ["Series y Cálculo en Varias Variables", "Dibujo para Ingeniería", "Organismo y Medio Ambiente", "Química Inorgánica y Ambiental", "Física 2", "Ética Profesional", "Práctica Vinculación con el Medio"],
  ["Química Orgánica y Ambiental", "Geomorfología", "Ecuaciones Diferenciales y Álgebra Lineal", "Biodiversidad", "Bioestadística", "Balances de Materia"],
  ["Bioquímica", "Laboratorio de Química Ambiental", "Mecánica de Fluidos", "Fundamentos de Ecología", "Ordenamiento Territorial", "Termodinámica"],
  ["Ecotoxicología", "Operaciones Unitarias", "Modelación de Sistemas", "Meteorología y Contaminación Atmosférica", "Microbiología Ambiental", "Prevención de Riesgos", "Inglés Instrumental"],
  ["Participación Ambiental Ciudadana", "Impactos Ambientales", "Manejo Integrado de Cuencas 1", "Ingeniería y Gestión de Residuos", "Economía Ambiental", "Legislación Ambiental", "TIPE 1", "Práctica Inicial"],
  ["Manejo de los Recursos Naturales", "Manejo Integrado de Cuencas 2", "Organización y Evaluación de Proyectos", "Gestión Energética", "Trabajo de Título 1", "Electivo Profesional 1", "TIPE 2"],
  ["Sostenibilidad y Eficiencia Ambiental", "Sistemas de Gestión Ambiental", "Electivo Profesional 2", "Trabajo de Título 2", "Práctica Profesional"]
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
  if (aprobados.has(ramo)) {
    aprobados.delete(ramo);
    btn.classList.remove("aprobado");
  } else {
    aprobados.add(ramo);
    btn.classList.add("aprobado");
  }
  actualizarEstado();
}

function actualizarEstado() {
  const botones = document.querySelectorAll(".ramo");
  botones.forEach(btn => {
    const ramo = btn.textContent;
    const prereqs = Object.keys(malla).filter(k => malla[k].includes(ramo));
    const desbloqueado = prereqs.every(p => aprobados.has(p)) || prereqs.length === 0;
    if (desbloqueado) {
      btn.classList.remove("bloqueado");
    } else {
      btn.classList.add("bloqueado");
    }
  });
}

crearMalla();
