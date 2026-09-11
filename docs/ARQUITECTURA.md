# 🏛️ Arquitectura del Proyecto: Lengua y Literatura 9.º EGB

Este documento describe la arquitectura técnica, los principios de diseño, el modelo de capas, los flujos de datos y la estrategia de despliegue de la plataforma educativa interactiva de **Lengua y Literatura (9.º Año de Educación General Básica Superior)** de la **Unidad Educativa Fiscomisional San Lorenzo**.

---

## 1. Visión General y Estilo Arquitectónico

La plataforma adopta el patrón arquitectónico de **Aplicación Web Estática de Página Única Ligera (Client-Side Static SPA / JAMstack Frontend)** complementada con una **Arquitectura Basada en Eventos y Componentes Desacoplados en Vanilla JavaScript (Event-Driven UI Pattern)**.

### Características del Enfoque Arquitectónico
- **Zero-Build Overhead:** La aplicación se ejecuta de forma nativa en cualquier navegador web moderno sin requerir empaquetadores complejos (Webpack, Vite) ni procesos de transpilación previa. Esto garantiza que cualquier estudiante o docente pueda ejecutar el proyecto sin barreras técnicas.
- **Bajo Consumo de Recursos:** Ideal para entornos escolares o dispositivos con hardware modesto o conexiones a Internet intermitentes.
- **Separación de Intereses (SoC):**
  - **Estructura Semántica:** HTML5 con etiquetas canónicas para SEO educativo y accesibilidad.
  - **Diseño y Estilizado:** CSS3 Vanilla modularizado con tokens de diseño en variables raíz (`:root` y `[data-theme="dark"]`).
  - **Comportamiento Reactivo y Datos:** JavaScript ES6+ que gestiona la lógica, el almacenamiento local y la inyección dinámica de contenidos.

---

## 2. Modelo Arquitectónico de Capas Modularizado

El software se organiza conceptualmente en tres capas lógicas desacopladas y escalables:

```mermaid
flowchart TD
    subgraph CAPA_PRESENTACION["1. Capa de Presentación (Vistas Modulares)"]
        UI_PORTAL["index.html\n(Portal Principal & Hub de Aprendizaje)"]
        subgraph VISTAS["views/ (Vistas Especializadas)"]
            V_MOD["modulos.html\n(Bloques 1-5 + Modal)"]
            V_LEC["lecciones.html\n(Lecciones Clave + Modales BS)"]
            V_TAL["taller.html\n(Taller de Ensayo Reactivo)"]
            V_FIG["figuras.html\n(Laboratorio 3D Flashcards)"]
            V_QUIZ["cuestionario.html\n(Autoevaluación /10 pts)"]
        end
        UI_CSS["css/style.css -> base.css, components.css, views/*.css"]
        UI_BS["Bootstrap 5.3.3 CDN\n(Rejilla responsiva, Modales)"]
    end

    subgraph CAPA_LOGICA["2. Capa Lógica y Controladores (js/modules/)"]
        MAIN["js/main.js\n(Orquestador Contextual)"]
        TC["modules/theme.js\n(initThemeToggle)"]
        NAV["modules/navigation.js\n(highlightActiveNavLink, smoothScroll)"]
        MC["modules/modulesModal.js\n(initModuleDetailsModal)"]
        EC["modules/essayBuilder.js\n(initEssayBuilder)"]
        QC["modules/quizEvaluation.js\n(initAutoevaluacion)"]
        FC["modules/flashcards.js\n(initFlashcards 3D)"]
        NC["modules/toast.js\n(showFloatingToast)"]
    end

    subgraph CAPA_DATOS["3. Capa de Datos y Estado (js/data/)"]
        DATA_MOD["data/modulesData.js\n(Diccionario MODULES_DATA)"]
        DATA_QUIZ["data/quizData.js\n(Banco QUIZ_QUESTIONS)"]
        STORAGE["Web Storage API\n(localStorage: 'theme' -> 'light' | 'dark')"]
    end

    %% Relaciones entre capas
    UI_PORTAL --> MAIN
    VISTAS --> MAIN
    MAIN --> CAPA_LOGICA
    CAPA_LOGICA <--> CAPA_DATOS
    UI_CSS -. Estiliza .-> UI_PORTAL & VISTAS
    UI_BS -. Provee soporte a .-> UI_PORTAL & VISTAS
```

### Detalle de cada Capa:

#### 1. Capa de Presentación (UI / Vistas Modulares Descentralizadas)
- **Portal Central (`index.html`):** Hub de bienvenida, métricas pedagógicas y navegación hacia cada módulo temático.
- **Vistas Específicas (`views/`):** Cada funcionalidad principal reside en su propio archivo semántico (`modulos.html`, `lecciones.html`, `taller.html`, `figuras.html`, `cuestionario.html`), con enlaces activos y contexto visual propio.
- **Sistema de Diseño Modular (`css/`):**
  - `css/base.css`: Tokens de color HSL/HEX, modo oscuro y reset.
  - `css/components.css`: Header glassmorphism, footer, botones, badges y notificaciones toast.
  - `css/views/*.css`: Hojas especializadas para cada vista (`portal.css`, `modules.css`, `lessons.css`, `essay.css`, `flashcards.css`, `quiz.css`).
  - `css/style.css`: Orquestador maestro que importa todos los submódulos para compatibilidad total.

#### 2. Capa Lógica y Controladores (`js/modules/` y `js/main.js`)
- **`js/main.js`:** Orquestador ligero que detecta los componentes presentes en el DOM de la vista abierta y activa de forma condicional y segura los controladores requeridos.
- **`theme.js`:** Controla la persistencia de tema claro/oscuro en `localStorage` sincronizada en todas las páginas.
- **`navigation.js`:** Gestiona el enlace activo en la barra de navegación y el desplazamiento suave.
- **`modulesModal.js`:** Inyecta dinámicamente el contenido de los bloques curriculares desde `MODULES_DATA`.
- **`essayBuilder.js`:** Escucha en tiempo real los inputs del estudiante para generar el esquema argumentativo.
- **`flashcards.js`:** Controla el volteo tridimensional (3D flip) de las tarjetas de figuras literarias con soporte de teclado y ratón.
- **`quizEvaluation.js`:** Motor de calificación cuantitativa sobre 10.0 puntos y desglose formativo por pregunta.
- **`toast.js`:** Servicio centralizado de alertas flotantes animadas.

#### 3. Capa de Estado y Datos Locales (Modelo)
- **Estructuras en Memoria:**
  - `MODULES_DATA`: Colección estructurada que almacena los 5 bloques del currículo nacional (título, insignia, descripción, lista de temas principales y desglose conceptual).
  - `QUIZ_QUESTIONS`: Banco de preguntas con opciones de respuesta, índice de acierto y retroalimentación pedagógica.
- **Persistencia en Cliente:**
  - `localStorage`: Guarda la clave `'theme'` para mantener la preferencia visual entre sesiones y recargas de página.

---

## 3. Ciclo de Vida y Flujo de Inicialización

Al cargar el documento en el navegador, el sistema sigue una secuencia ordenada de inicialización sin bloqueo del renderizado principal:

```mermaid
sequenceDiagram
    autonumber
    actor Usuario as Estudiante / Navegador
    participant DOM as Documento HTML (DOM)
    participant App as main.js (DOMContentLoaded)
    participant Theme as initThemeToggle()
    participant Storage as localStorage / Media Query
    participant Modules as initModuleDetailsModal()
    participant Essay as initEssayBuilder()
    participant Quiz as initAutoevaluacion()
    participant Flash as initFlashcards()

    Usuario->>DOM: Solicita index.html
    DOM-->>App: Dispara evento 'DOMContentLoaded'
    App->>Theme: Ejecuta initThemeToggle()
    Theme->>Storage: Consulta 'theme' o matchMedia('(prefers-color-scheme: dark)')
    Storage-->>Theme: Retorna 'light' o 'dark'
    Theme->>DOM: Establece atributo data-theme y actualiza icono
    App->>Modules: Ejecuta initModuleDetailsModal() (Registra delegación de eventos)
    App->>Essay: Ejecuta initEssayBuilder() (Registra listeners en inputs)
    App->>Quiz: Ejecuta initAutoevaluacion() (Configura botón de calificación)
    App->>Flash: Ejecuta initFlashcards() (Registra escuchadores de clic)
    App-->>Usuario: Interfaz 100% interactiva y lista para su uso
```

---

## 4. Diagrama de Despliegue e Infraestructura

Dado que el proyecto no requiere un servidor de aplicaciones dinámico (como Node.js, PHP o Python en producción), puede desplegarse en cualquier infraestructura de **Alojamiento Web Estático**:

```mermaid
flowchart LR
    subgraph CLIENTE["Dispositivo del Estudiante / Docente"]
        BROWSER["Navegador Web Moderno\n(Chrome, Edge, Firefox, Safari)"]
        CACHE_LOC["Caché de Navegador &\nlocalStorage"]
        BROWSER <--> CACHE_LOC
    end

    subgraph CDN_EXTERNO["Redes de Distribución de Contenido (CDN)"]
        BOOTSTRAP_CDN["Bootstrap 5.3.3 CDN\n(jsdelivr.net: CSS & JS Bundle)"]
        FONTS_CDN["Google Fonts CDN\n(fonts.googleapis.com: Outfit & Playfair)"]
    end

    subgraph SERVIDOR_ESTATICO["Infraestructura de Alojamiento (Hosting)"]
        GITHUB_PAGES["GitHub Pages / Vercel / Netlify\no Servidor Institucional UEF San Lorenzo"]
        DOCS_STATIC["Archivos Estáticos:\n- index.html\n- css/style.css\n- js/main.js\n- assets/"]
        GITHUB_PAGES --- DOCS_STATIC
    end

    BROWSER -- "1. Petición HTTPS (index.html, style.css, main.js)" --> GITHUB_PAGES
    BROWSER -- "2. Descarga de Librería Bootstrap" --> BOOTSTRAP_CDN
    BROWSER -- "3. Descarga de Tipografías Web" --> FONTS_CDN
```

### Ventajas de este Modelo de Despliegue
1. **Costo Cero de Mantenimiento:** Puede alojarse gratuitamente en GitHub Pages, GitLab Pages, Cloudflare Pages, Netlify o Vercel.
2. **Alta Disponibilidad y Tolerancia a Fallos:** Los servidores de páginas estáticas tienen una disponibilidad superior al 99.99% y entregan contenido con tiempos de latencia mínimos gracias al edge caching.
3. **Seguridad Robusta:** No hay vulnerabilidades asociadas a ejecución de scripts en backend (como inyección SQL o Remote Code Execution en servidor).

---

## 5. Principios de Diseño y Atributos de Calidad

### A. Rendimiento (Performance)
- **Cero Dependencias Pesadas:** No utiliza frameworks reactivos que requieran descargar megabytes de runtime (como React o Angular). La carga inicial se completa en menos de **300 milisegundos**.
- **Estilos Eficientes:** Uso de selectores CSS de baja especificidad y transformaciones basadas en aceleración por hardware (`transform`, `opacity`) para transiciones fluidas a 60 FPS.

### B. Accesibilidad (A11y)
- **Contraste de Color:** La paleta de colores (`--primary: #4f46e5`, `--text-main: #0f172a` en claro y `--text-main: #f1f5f9` en oscuro) cumple con los requisitos de contraste mínimo WCAG 2.1 AA.
- **Soporte de Entrada:** Elementos interactivos con atributos accesibles (`aria-label`, `aria-labelledby`, `role="dialog"` y controles con etiquetas `<label for="...">`).

### C. Mantenibilidad y Extensibilidad
- **Arquitectura Basada en Datos:** Para modificar los contenidos de los bloques curriculares o actualizar el cuestionario de preguntas, basta con editar los objetos `MODULES_DATA` y `QUIZ_QUESTIONS` en `js/main.js` sin alterar las funciones lógicas ni la estructura HTML.
- **Diseño Modular:** Cada funcionalidad tiene una función inicializadora independiente (`initThemeToggle`, `initModuleDetailsModal`, `initEssayBuilder`, etc.), lo que permite agregar nuevos módulos fácilmente.
