# 📖 Plataforma Interactiva de Lengua y Literatura — 9.º Año EGB Superior

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Institución](https://img.shields.io/badge/Instituci%C3%B3n-U.E.F._San_Lorenzo-4f46e5?style=for-the-badge&logo=book&logoColor=white)](#)
[![Nivel Educativo](https://img.shields.io/badge/Nivel-9no_EGB_Superior-0d9488?style=for-the-badge)](#)
[![Estado](https://img.shields.io/badge/Estado-Producci%C3%B3n-10b981?style=for-the-badge)](#)

---

## 🏫 Presentación Institucional

Bienvenido al repositorio oficial del **Portal Educativo Interactivo de Lengua y Literatura para Noveno Año de Educación General Básica Superior**, diseñado y desarrollado para la **Unidad Educativa Fiscomisional San Lorenzo**.

Esta plataforma web es un entorno de aprendizaje digital, dinámico y accesible que acompaña a estudiantes y docentes en el dominio del currículo nacional de Lengua y Literatura, integrando recursos multimedia, talleres prácticos de redacción y herramientas de autoevaluación formativa en tiempo real.

---

## 🎯 Propósito y Enfoque Pedagógico

El proyecto traduce los cinco bloques curriculares del área de Lengua y Literatura en una experiencia digital atractiva, promoviendo:
1. **El pensamiento crítico y analítico:** Mediante la lectura de textos de divulgación científica y la narrativa policial clásica.
2. **La expresión escrita rigurosa:** A través de un constructor guiado de esquemas de ensayo argumentativo con retroalimentación instantánea.
3. **El fortalecimiento de la competencia ortográfica y gramatical:** Con lecciones interactivas sobre el uso normativo de grafías dudosas (como la 'G' y la 'J') y conectores lógicos.
4. **La apreciación estética:** Por medio de un laboratorio de recursos estilísticos y figuras literarias con tarjetas interactivas de memoria.
5. **La autoevaluación formativa:** Con un cuestionario automatizado que calcula la nota sobre 10.0 puntos y genera un diagnóstico cualitativo al instante.

---

## ✨ Características Principales

| Módulo / Funcionalidad | Descripción Pedagógica | Implementación Técnica |
| :--- | :--- | :--- |
| **🌓 Tema Claro / Oscuro** | Adaptación ergonómica de lectura para sesiones diurnas o nocturnas. | Variables CSS (tokens HSL/HEX) persistidas en `localStorage` con detección automática de `prefers-color-scheme`. |
| **📜 5 Bloques Curriculares** | Cobertura integral: Lengua y Cultura, Comunicación Oral, Lectura Crítica, Escritura y Literatura. | Tarjetas interactivas conectadas a un modal dinámico que inyecta contenido estructurado desde el objeto `MODULES_DATA`. |
| **📖 Lecciones Clave 9º EGB** | Profundización en Novela Policial, Reglas Ortográficas de la G/J y Texto Expositivo. | Integración con el sistema de modales y rejillas de Bootstrap 5.3.3 con diseño temático adaptativo. |
| **📝 Taller de Ensayo Argumentativo** | Laboratorio de redacción donde el alumno estructura: Tema, Tesis debatible y Argumento de respaldo. | Reactividad en el cliente sin recarga de página; escucha de eventos `input` en tiempo real. |
| **🎯 Autoevaluación Interactiva** | Test de 3 preguntas de opción múltiple ponderado sobre 10 puntos con desglose temático. | Algoritmo en JavaScript que valida campos incompletos, computa el puntaje y muestra un *Toast flotante* personalizado. |
| **🃏 Laboratorio de Figuras Literarias** | Entrenamiento mnemotécnico de Metáfora, Símil, Hipérbole y Personificación. | Flashcards interactivas con animación 3D (`perspective` y `transform: rotateY(180deg)`). |
| **🧭 Navegación Fluida** | Menú anclado con desplazamiento suave (*smooth scroll*) y encabezado flotante con efecto *glassmorphism*. | CSS `scroll-behavior: smooth`, `backdrop-filter: blur(12px)` y controladores JS de eventos de enlace. |

---

## 📂 Estructura del Repositorio

```text
Lengua-Literatura-9no/
│
├── index.html                     # Documento HTML principal semántico y estructurado
│
├── css/
│   └── style.css                  # Sistema de diseño con tokens CSS, modo oscuro y animaciones
│
├── js/
│   └── main.js                    # Lógica interactiva: temas, modales, quiz, taller y flashcards
│
├── assets/
│   └── img/                       # Recursos gráficos, logotipos e iconografía del proyecto
│
├── docs/                          # Documentación técnica y académica completa
│   ├── DOCUMENTACION_TECNICA.md   # Especificaciones técnicas de código, APIs y componentes
│   ├── ARQUITECTURA.md            # Arquitectura del software, modelo de capas y despliegue
│   ├── DIAGRAMAS_UML.md           # Diagramas UML (Casos de Uso, Clases, Secuencia, Estados, Actividad)
│   └── CASOS_DE_USO.md            # Especificación detallada de casos de uso (CU-01 al CU-07)
│
└── README.md                      # Presentación general y guía de inicio rápido (este archivo)
```

---

## 🚀 Inicio Rápido e Instalación Local

La plataforma está construida con tecnologías web puras del lado del cliente (**Vanilla HTML5, CSS3 y JavaScript ES6+**), por lo que **no requiere instalación previa de dependencias, compiladores ni manejadores de paquetes**.

### Opción 1: Visualización Inmediata en Navegador
1. Clona o descarga este repositorio en tu equipo local:
   ```bash
   git clone https://github.com/Naidelyn2003/Lengua-Literatura-9no.git
   ```
2. Accede a la carpeta del proyecto:
   ```bash
   cd Lengua-Literatura-9no
   ```
3. Abre el archivo `index.html` en tu navegador web preferido (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari o Brave).

### Opción 2: Uso con Visual Studio Code (Live Server)
1. Abre la carpeta del proyecto en **Visual Studio Code**.
2. Instala la extensión **Live Server** (creada por *Ritwick Dey*).
3. Haz clic derecho sobre el archivo `index.html` y selecciona **"Open with Live Server"**.
4. La aplicación se abrirá automáticamente en `http://127.0.0.1:5500/index.html`.

### Opción 3: Servidor Local Rápido (Python o Node.js)
- **Con Python 3:**
  ```bash
  python -m http.server 8000
  ```
  Luego abre `http://localhost:8000` en tu navegador.

- **Con Node.js / NPX:**
  ```bash
  npx serve .
  ```

---

## 📚 Documentación Técnica y de Arquitectura

Para profundizar en el diseño técnico, la arquitectura de software y el modelado formal del sistema, consulta los siguientes documentos ubicados en la carpeta [`/docs`](docs/):

- 🏛️ **[Arquitectura del Proyecto (docs/ARQUITECTURA.md)](docs/ARQUITECTURA.md)**: Patrón de diseño cliente ligero, modelo de capas, flujo de datos, gestión de estado y diagrama de despliegue.
- 📐 **[Diagramas UML (docs/DIAGRAMAS_UML.md)](docs/DIAGRAMAS_UML.md)**: Modelado formal en sintaxis nativa Mermaid: Casos de Uso, Clases, Secuencia (Quiz, Ensayo, Modales), Estados y Diagrama de Actividad pedagógica.
- 📋 **[Casos de Uso Detallados (docs/CASOS_DE_USO.md)](docs/CASOS_DE_USO.md)**: Especificación formal de los 7 casos de uso del sistema (CU-01 a CU-07) con actores, precondiciones, flujo normal, flujos alternativos y postcondiciones.
- ⚙️ **[Documentación Técnica (docs/DOCUMENTACION_TECNICA.md)](docs/DOCUMENTACION_TECNICA.md)**: Manual de referencia de funciones de `main.js`, estructuras de datos (`MODULES_DATA`, `QUIZ_QUESTIONS`), catálogo de variables de `style.css` y plan de pruebas.

---

## 🛠️ Tecnologías y Dependencias Externas

- **HTML5:** Estructura semántica accesible (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
- **CSS3:** Sistema de diseño personalizado, Grid layout, Flexbox, variables CSS dinámicas, transiciones cúbicas de Bézier y modo oscuro.
- **JavaScript (ES6+):** Manipulación reactiva del DOM sin librerías pesadas, almacenamiento en `localStorage`, escuchadores de eventos pasivos.
- **Bootstrap 5.3.3 (CDN):** Utilizado para el sistema de rejilla (*grid system*), componentes modales accesibles y utilidades de espaciado.
- **Google Fonts:**
  - *Outfit:* Tipografía sans-serif moderna, limpia y altamente legible para textos de lectura.
  - *Playfair Display:* Tipografía serif refinada utilizada en títulos y citas literarias.

---

## 👥 Créditos y Autoría

- **Institución:** Unidad Educativa Fiscomisional San Lorenzo.
- **Área Académica:** Lengua y Literatura — Educación General Básica Superior (9.º Año).
- **Repositorio:** [Naidelyn2003/Lengua-Literatura-9no](https://github.com/Naidelyn2003/Lengua-Literatura-9no)
- **Año:** 2026.

---

## 📄 Licencia

Este proyecto educativo ha sido desarrollado con fines pedagógicos y formativos. Su código está disponible bajo la licencia **MIT**, permitiendo su uso, adaptación y extensión para la comunidad educativa.
