/**
 * Lengua y Literatura 9no EGB - Lógica y Funcionalidad Interactivas
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicialización de Componentes
    initThemeToggle();
    initModuleDetailsModal();
    initEssayBuilder();
    initFlashcards();
    initAutoevaluacion();
    initSmoothScroll();
});

/* ==========================================================================
   DATOS ACADÉMICOS (MÓDULOS DEL CURRÍCULO DE 9NO EGB)
   ========================================================================== */
const MODULES_DATA = {
    1: {
        title: "Lengua y Cultura: Origen de la Escritura y Variaciones Lingüísticas",
        badge: "Bloque 1",
        description: "Explora la evolución de los sistemas de escritura desde los sumerios hasta la era digital, y analiza cómo las variaciones lingüísticas enriquecen nuestra identidad cultural.",
        topics: [
            "De la tradición oral a la alfabética (Mesopotamia, Egipto, Fenicia)",
            "Variaciones lingüísticas diatópicas, diastráticas y diafásicas",
            "La influencia de las tecnologías en la escritura contemporánea",
            "Diversidad lingüística del Ecuador y preservación de lenguas ancestrales"
        ],
        details: [
            {
                title: "1. Evolución Histórica de la Escritura",
                text: "La escritura cuneiforme sumeria (circa 3500 a.C.) y los jeroglíficos egipcios marcaron la transición fundamental de la prehistoria a la historia contada. El alfabeto fenicio simplificó el sistema a sonidos fonéticos."
            },
            {
                title: "2. Sociolingüística y Registros de Habla",
                text: "El idioma español se diversifica a través de dialectos geográficos (sociolectos, cronolectos) y niveles de formalidad (formal, informal, vulgar, científico)."
            }
        ]
    },
    2: {
        title: "Comunicación Oral: El Debate y la Entrevista",
        badge: "Bloque 2",
        description: "Desarrolla habilidades de argumentación formal en vivo, escucha activa, estructura del debate competitivo y diseño de entrevistas periodísticas.",
        topics: [
            "Estructura del Debate: Moderador, participantes, tiempos y réplicas",
            "Técnicas de persuasión y falacias argumentativas",
            "La Entrevista: Tipos (estructurada, semiestructurada) y roles",
            "Lenguaje verbal y no verbal en la exposición oral"
        ],
        details: [
            {
                title: "1. Roles en un Debate Formado",
                text: "El moderador garantiza el respeto a la pauta de tiempo y objetividad. Los debatientes presentan argumentos con evidencias sólidas (citas, estadísticas) y contraargumentan con rigor académico."
            },
            {
                title: "2. Detección de Falacias",
                text: "Aprende a identificar sesgos cognitivos y falacias lógicas comunes como 'Ad Hominem', 'Ad Baculum' o 'Generalización apresurada'."
            }
        ]
    },
    3: {
        title: "Lectura: Textos de Divulgación Científica y Novela Policial",
        badge: "Bloque 3",
        description: "Analiza la estructura crítica de artículos científicos dirigidos a público general y sumérgete en las técnicas narrativas de la novela de enigma y policial.",
        topics: [
            "Comprensión de textos de divulgación científica (tesis, cuerpo, glosario)",
            "Subgéneros narrativos: La novela policial y de ciencia ficción",
            "Elemento del suspenso: Pistas, investigadores, antagonistas y giros de tuerca",
            "Niveles de lectura: Literal, inferencial y crítico-valorativo"
        ],
        details: [
            {
                title: "1. El Articulo de Divulgación Científica",
                text: "Traduce el lenguaje especializado técnico a un registro accesible para el público en general, manteniendo el rigor de las fuentes científicas y la verificación empírica."
            },
            {
                title: "2. La Estructura de la Novela Policial",
                text: "Desde Edgar Allan Poe (Con 'Los crímenes de la calle Morgue') hasta Arthur Conan Doyle, la novela policial clásica se basa en la deducción lógica, la observación meticulosa y la resolución del enigma."
            }
        ]
    },
    4: {
        title: "Escritura: El Ensayo Argumentativo y Cohesión Textual",
        badge: "Bloque 4",
        description: "Domina la redacción de textos argumentativos de nivel académico, el uso de conectores lógicos, citas APA e híper-estilo narrativo.",
        topics: [
            "Estructura del Ensayo: Tesis, argumentos de autoridad/ejemplo, conclusión",
            "Conectores textuales: Causales, de oposición, consecutivos y organizadores",
            "Signos de puntuación avanzados: Uso del punto y coma, comillas y paréntesis",
            "Cohesión y coherencia: Pronominalización y elipsis"
        ],
        details: [
            {
                title: "1. Redacción de Tesis Válida",
                text: "Una tesis debe ser una afirmación debatible, específica y relevante que el autor defenderá con argumentos comprobables a lo largo del texto."
            },
            {
                title: "2. Propiedad Léxica y Vicios del Lenguaje",
                text: "Identifica y corrige el dequeísmo, redundancias, cosismo y pobreza léxica en la escritura formal."
            }
        ]
    },
    5: {
        title: "Literatura: Poesía Amorosa, Social y Figuras Literarias",
        badge: "Bloque 5",
        description: "Disfruta de la lírica hispanoamericana, analiza la métrica, rima y recursos expresivos poéticos como la metáfora, anáfora e hipérbole.",
        topics: [
            "Evolución de la poesía: Del Romanticismo a las Vanguardias",
            "Figuras literarias expresivas (Metáfora, Símil, Hipérbole, Personificación)",
            "Análisis métrico: Versos de arte mayor/menor, rima asonante y consonante",
            "Representantes de la poesía ecuatoriana y latinoamericana"
        ],
        details: [
            {
                title: "1. Recursos Estilísticos",
                text: "Las figuras literarias transforman el lenguaje cotidiano en arte visual y emocional. Permiten transmitir significados profundos mediante asociaciones creativas."
            },
            {
                title: "2. Poesía Ecuatoriana del Siglo XX",
                text: "Lectura crítica de autores clave de la lírica nacional como Medardo Ángel Silva, Jorge Carrera Andrade y César Dávila Andrade."
            }
        ]
    }
};

/* ==========================================================================
   PREGUNTAS DEL QUIZ INTERACTIVO
   ========================================================================== */
const QUIZ_QUESTIONS = [
    {
        question: "¿Cuál fue el primer sistema de escritura conocido en la historia humana?",
        options: ["Alfabeto latino", "Jeroglíficos mayas", "Escritura cuneiforme sumeria", "Ideogramas chinos"],
        answer: 2,
        explanation: "La escritura cuneiforme fue desarrollada por los sumerios en Mesopotamia alrededor del 3500 a.C."
    },
    {
        question: "¿Qué figura literaria consiste en atribuir cualidades humanas a objetos inanimados o animales?",
        options: ["Hipérbole", "Personificación o Prosopopeya", "Metáfora", "Anáfora"],
        answer: 1,
        explanation: "La personificación otorga rasgos humanos (emociones, acciones) a elementos que no los poseen."
    },
    {
        question: "¿Cuál es el objetivo principal de un ensayo argumentativo?",
        options: ["Contar una historia ficticia de aventuras", "Defender una postura o tesis con razones fundadas", "Explicar un experimento químico paso a paso", "Dar instrucciones de uso para un aparato"],
        answer: 1,
        explanation: "El ensayo argumentativo busca persuadir o convencer al lector sobre una tesis específica utilizando argumentos lógicos."
    },
    {
        question: "¿Qué conector textual expresa oposición entre dos ideas?",
        options: ["Por lo tanto", "Sin embargo", "Además", "En primer lugar"],
        answer: 1,
        explanation: "'Sin embargo' es un conector adversativo u de oposición."
    }
];

/* ==========================================================================
   2. FUNCIONALIDADES
   ========================================================================== */

// 2.1 MODO OSCURO / CLARO
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        toggleBtn.setAttribute('title', theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro');
    }
}

// 2.2 MODAL DE DETALLE DE MÓDULO
function initModuleDetailsModal() {
    const modal = document.getElementById('module-modal');
    const closeBtn = document.getElementById('modal-close');
    const openBtns = document.querySelectorAll('.js-open-module');

    if (!modal) return;

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const moduleId = btn.getAttribute('data-module-id');
            const data = MODULES_DATA[moduleId];
            if (data) {
                renderModuleModalContent(data);
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function renderModuleModalContent(data) {
    const titleEl = document.getElementById('modal-title');
    const badgeEl = document.getElementById('modal-badge');
    const bodyEl = document.getElementById('modal-body-content');

    if (titleEl) titleEl.textContent = data.title;
    if (badgeEl) badgeEl.textContent = data.badge;

    if (bodyEl) {
        let html = `<p class="modal-desc">${data.description}</p>`;
        html += `<h4 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--primary);">Temas Principales:</h4>`;
        html += `<ul style="margin-left: 1.25rem; margin-bottom: 1.5rem;">`;
        data.topics.forEach(t => {
            html += `<li style="margin-bottom: 0.4rem;">${t}</li>`;
        });
        html += `</ul>`;

        html += `<h4 style="margin-bottom: 0.75rem; color: var(--primary);">Desarrollo del Bloque:</h4>`;
        data.details.forEach(d => {
            html += `
                <div class="content-block-item">
                    <h5>${d.title}</h5>
                    <p>${d.text}</p>
                </div>
            `;
        });

        bodyEl.innerHTML = html;
    }
}

// 2.3 TALLER DE ESCRITURA (CONSTRUCTOR DE ENSAYO ARGUMENTATIVO)
function initEssayBuilder() {
    const topicInput = document.getElementById('essay-topic');
    const thesisInput = document.getElementById('essay-thesis');
    const argInput = document.getElementById('essay-arg');
    const previewBox = document.getElementById('essay-preview-output');

    const updatePreview = () => {
        if (!previewBox) return;
        const topic = topicInput ? topicInput.value.trim() : '';
        const thesis = thesisInput ? thesisInput.value.trim() : '';
        const arg = argInput ? argInput.value.trim() : '';

        if (!topic && !thesis && !arg) {
            previewBox.innerHTML = `<em style="color: var(--text-muted);">Escribe en los campos de arriba para generar el esquema de tu ensayo argumentativo en tiempo real.</em>`;
            return;
        }

        previewBox.innerHTML = `
            <div style="font-size: 0.9rem;">
                <p><strong>🎯 Tema central:</strong> ${topic || '<span style="color:var(--text-muted)">Sin tema definido</span>'}</p>
                <p style="margin-top:0.5rem;"><strong>💡 Tesis argumentativa:</strong> "${thesis || 'Escribe tu posición aquí...'}"</p>
                <p style="margin-top:0.5rem;"><strong>🛡️ Argumento principal:</strong> ${arg || 'Describe la evidencia que respalda tu tesis...'}</p>
            </div>
        `;
    };

    [topicInput, thesisInput, argInput].forEach(el => {
        if (el) el.addEventListener('input', updatePreview);
    });
}

// 2.4 TARJETAS INTERACTIVAS (FLASHCARDS DE FIGURAS LITERARIAS)
function initFlashcards() {
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

// 2.5 AUTOEVALUACIÓN INTERACTIVA Y CÁLCULO DE CALIFICACIÓN (SOBRE 10 PUNTOS)
function initAutoevaluacion() {
    const btnCalcular = document.getElementById('btn-calcular-calificacion');
    if (!btnCalcular) return;

    btnCalcular.addEventListener('click', () => {
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');

        // Validar que se hayan respondido las 3 preguntas
        if (!q1 || !q2 || !q3) {
            showFloatingToast(`
                <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem;">
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                        <span style="font-size:1.6rem;">⚠️</span>
                        <div>
                            <strong style="color:var(--accent-rose); display:block; font-size:0.95rem;">Preguntas Incompletas</strong>
                            <span style="font-size:0.85rem; color:var(--text-muted);">Por favor responde las 3 preguntas antes de calcular tu calificación.</span>
                        </div>
                    </div>
                    <button type="button" class="btn-close" onclick="closeFloatingToast()" aria-label="Cerrar"></button>
                </div>
            `);
            return;
        }

        // Calcular respuestas correctas (valores: "1" = correcta, "0" = incorrecta)
        const val1 = parseInt(q1.value);
        const val2 = parseInt(q2.value);
        const val3 = parseInt(q3.value);

        const correctCount = val1 + val2 + val3;
        const totalScore = ((correctCount / 3) * 10).toFixed(1); // Calificación sobre 10.0

        let badgeColor = 'badge-emerald';
        let icon = '🎉';
        let titleMessage = '¡Excelente Trabajo!';
        let descMessage = 'Has demostrado un dominio sobresaliente en La Novela Policial, la Ortografía de la G/J y El Texto Expositivo.';

        if (correctCount === 2) {
            badgeColor = 'badge-primary';
            icon = '👍';
            titleMessage = '¡Buen Resultado!';
            descMessage = 'Obtuviste 2 de 3 respuestas correctas (6.7/10). Revisa las lecciones para perfeccionar el tema fallido.';
        } else if (correctCount <= 1) {
            badgeColor = 'badge-amber';
            icon = '📚';
            titleMessage = '¡Sigue Practicando!';
            descMessage = 'Te sugerimos repasar los modales interactivos de lecciones para reforzar tus conocimientos de 9no EGB.';
        }

        // Crear el mensaje flotante de retroalimentación
        const toastHTML = `
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:1rem; margin-bottom:0.75rem;">
                <div style="display:flex; align-items:center; gap:0.75rem;">
                    <span style="font-size:2rem;">${icon}</span>
                    <div>
                        <span class="badge ${badgeColor}" style="font-size:0.85rem; padding: 0.3rem 0.75rem;">Calificación: ${totalScore} / 10 pts</span>
                        <h4 style="font-size:1.1rem; font-weight:700; margin-top:0.35rem; color:var(--text-main);">${titleMessage}</h4>
                    </div>
                </div>
                <button type="button" class="btn-close" onclick="closeFloatingToast()" aria-label="Cerrar"></button>
            </div>
            <p style="font-size:0.875rem; color:var(--text-muted); margin-bottom:0.75rem; line-height:1.4;">${descMessage}</p>
            <div style="font-size:0.825rem; background:var(--bg-body); padding:0.65rem 0.85rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); display:flex; flex-direction:column; gap:0.25rem;">
                <div><strong>1. Novela Policial:</strong> ${val1 === 1 ? '<span style="color:#10b981;">✅ Correcto</span>' : '<span style="color:#e11d48;">❌ Incorrecto (Enigma y pistas)</span>'}</div>
                <div><strong>2. Uso de G / J:</strong> ${val2 === 1 ? '<span style="color:#10b981;">✅ Correcto</span>' : '<span style="color:#e11d48;">❌ Incorrecto (Geografía, viaje, recoger, dijeron)</span>'}</div>
                <div><strong>3. Texto Expositivo:</strong> ${val3 === 1 ? '<span style="color:#10b981;">✅ Correcto</span>' : '<span style="color:#e11d48;">❌ Incorrecto (Información clara y objetiva)</span>'}</div>
            </div>
        `;

        showFloatingToast(toastHTML);
    });
}

function showFloatingToast(contentHTML) {
    closeFloatingToast(); // Eliminar toast previo si existe

    const toastDiv = document.createElement('div');
    toastDiv.id = 'floating-feedback-toast';
    toastDiv.className = 'floating-feedback-toast';
    toastDiv.innerHTML = contentHTML;

    document.body.appendChild(toastDiv);
}

window.closeFloatingToast = function() {
    const existing = document.getElementById('floating-feedback-toast');
    if (existing) {
        existing.remove();
    }
};

// 2.6 DESPLAZAMIENTO SUAVE
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
