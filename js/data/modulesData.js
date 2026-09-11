/**
 * Lengua y Literatura 9no EGB - Datos Curriculares de Módulos
 * Unidad Educativa Fiscomisional San Lorenzo
 */

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
                title: "1. El Artículo de Divulgación Científica",
                text: "Traduce el lenguaje especializado técnico a un registro accesible para el público en general, manteniendo el rigor de las fuentes científicas y la verificación empírica."
            },
            {
                title: "2. La Estructura de la Novela Policial",
                text: "Desde Edgar Allan Poe (con 'Los crímenes de la calle Morgue') hasta Arthur Conan Doyle, la novela policial clásica se basa en la deducción lógica, la observación meticulosa y la resolución del enigma."
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

// Exportación global en navegador y compatibilidad con entornos modulares
if (typeof window !== 'undefined') {
    window.MODULES_DATA = MODULES_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MODULES_DATA;
}
