const pro = [{"nombre": "Proyecto 1", "descripción": "Descripción", "lenguajes": "Lenguajes", "portada": "img/foto.jpg" },
    {"nombre": "Proyecto 1", "descripción": "Descripción", "lenguajes": "Lenguajes", "portada": "img/foto.jpg" },
    {"nombre": "Proyecto 1", "descripción": "Descripción", "lenguajes": "Lenguajes", "portada": "img/foto.jpg" },
    {"nombre": "Proyecto 1", "descripción": "Descripción", "lenguajes": "Lenguajes", "portada": "img/foto.jpg" }
];
const skills = [{"nombre": "HTML", "imagen": "./img/html.png" },
    {"nombre": "JS", "imagen": "./img/js.png" },
    {"nombre": "PHP", "imagen": "./img/php.png" },
    {"nombre": "JAVA", "imagen": "./img/java.png" },
    {"nombre": "NODE JS", "imagen": "./img/node.png" },
    {"nombre": "JOOMLA", "imagen": "./img/joomla.png" },
    {"nombre": "GANTRY", "imagen": "./img/gantry.png" },
    {"nombre": "MYSQL", "imagen": "./img/mysql.png" },
    {"nombre": "POSTGRESQL", "imagen": "./img/postgres.png" }];

cargarProyectos();
cargarSkills();

function cargarProyectos() {
    const div = document.getElementById('projects');
    for (let i = 0; i < pro.length; i++) {
        div.innerHTML += `<div class="project" id="project_${i}" title="Detalles"><img src="${pro[i].portada}" alt="imagen del proyecto"><span>${pro[i].nombre}</span></div>`;
    }
}

function cargarSkills() {
    const div = document.getElementById('skills');
    for (let i = 0; i < skills.length; i++) {
        div.innerHTML += `<div class="skill" id="skill_${i}" title="${skills[i].nombre}"><img src="${skills[i].imagen}" alt="imagen de ${skills[i].nombre}"></div>`;
    }
}

document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    const id = project.id.split('_')[1];
    const info = pro[id];
    document.getElementById('modalTitle').textContent = info.nombre;
    document.getElementById('modalImage').src = info.portada;
    document.getElementById('modalDescription').textContent = info.descripción;
    document.getElementById('modalLenguajes').textContent = info.lenguajes;
    document.getElementById('modal').style.display = 'block';
  });
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.remove('show');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('modal').classList.remove('show');
  }
});
