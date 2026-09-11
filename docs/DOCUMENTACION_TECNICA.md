# ⚙️ Documentación Técnica del Sistema: Lengua y Literatura 9.º EGB

Este documento constituye el manual de referencia técnica, desarrollo y mantenimiento de la plataforma interactiva de **Lengua y Literatura para 9.º Grado de Educación General Básica Superior** de la **Unidad Educativa Fiscomisional San Lorenzo**.

---

## 1. Requerimientos del Sistema y Compatibilidad

La plataforma ha sido desarrollada siguiendo los estándares web modernos del W3C (HTML5, CSS3, ECMAScript 2020+), lo que le permite ejecutarse de manera homogénea en cualquier navegador web moderno sin dependencias de plugins o software adicional.

### Compatibilidad de Navegadores
| Navegador | Versión Mínima Soportada | Estado de Compatibilidad |
| :--- | :--- | :--- |
| **Google Chrome / Chromium** | 90+ | Totalmente Compatible (Soporte CSS Grid, Flexbox, Custom Properties) |
| **Mozilla Firefox** | 88+ | Totalmente Compatible |
| **Microsoft Edge** | 90+ | Totalmente Compatible |
| **Apple Safari (macOS / iOS)** | 14.1+ | Totalmente Compatible |
| **Opera** | 76+ | Totalmente Compatible |
| **Navegadores Móviles (Android / iOS)** | Cualquier versión moderna | Optimizado con diseño responsivo táctil |

### Requisitos de Hardware del Cliente
- **Memoria RAM:** Mínimo 1 GB disponible en el dispositivo.
- **Resolución de Pantalla:** Adaptable desde teléfonos móviles (360px de ancho) hasta monitores de escritorio Ultra HD (4K).
- **Almacenamiento Local:** Requiere soporte de `localStorage` habilitado para persistir la preferencia de tema.

---

## 2. Dependencias Externas y Recursos CDN

El proyecto minimiza las dependencias externas a recursos estables y de alta disponibilidad mediante CDN (Content Delivery Network):

### 1. Bootstrap 5.3.3
- **CSS:** `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`
  - *Integridad SHA-384:* `sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH`
  - *Uso:* Utilidades de rejilla responsiva (Grid: `.row`, `.col-md-4`, etc.), espaciados rápidos y diseño base de tarjetas y modales.
- **JavaScript Bundle:** `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`
  - *Integridad SHA-384:* `sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz`
  - *Uso:* Inicialización y control de accesibilidad de los modales de las tres lecciones formativas.

### 2. Google Fonts
- **URL de importación:** `https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,800;1,600&display=swap`
- **Tipografías:**
  - `Outfit`: Familia tipográfica sans-serif contemporánea utilizada para cuerpos de texto, interfaces de usuario, botones y formularios.
  - `Playfair Display`: Familia tipográfica con serifa de alta elegancia utilizada en títulos principales (`h1`, `h2`), encabezados y citas literarias.

---

## 3. Especificación de Estructuras de Datos (`js/data/modulesData.js` y `js/data/quizData.js`)

Los contenidos curriculares y las preguntas evaluativas están organizados en módulos JavaScript independientes en la carpeta `js/data/` que desacoplan la información de la lógica de renderizado.

### 3.1 Diccionario de Módulos Curriculares (`MODULES_DATA`)

Estructura tipo diccionario asociativo donde cada clave numérica representa un bloque curricular (del 1 al 5):

```typescript
interface ModuleDetail {
    title: string;       // Subtítulo del tema dentro del bloque
    text: string;        // Explicación conceptual detallada
}

interface ModuleItem {
    title: string;             // Título formal del bloque curricular
    badge: string;             // Etiqueta distintiva (ej. "Bloque 1")
    description: string;       // Resumen pedagógico del bloque
    topics: string[];          // Lista de temas o destrezas a desarrollar
    details: ModuleDetail[];   // Desglose conceptual para el modal
}

type ModulesDataRecord = Record<number, ModuleItem>;
```

#### Esquema del Objeto:
```javascript
const MODULES_DATA = {
    1: {
        title: "Lengua y Cultura: Origen de la Escritura y Variaciones Lingüísticas",
        badge: "Bloque 1",
        description: "Explora la evolución de los sistemas de escritura desde los sumerios...",
        topics: [
            "De la tradición oral a la alfabética (Mesopotamia, Egipto, Fenicia)",
            "Variaciones lingüísticas diatópicas, diastráticas y diafásicas",
            "La influencia de las tecnologías en la escritura contemporánea",
            "Diversidad lingüística del Ecuador y preservación de lenguas ancestrales"
        ],
        details: [
            {
                title: "1. Evolución Histórica de la Escritura",
                text: "La escritura cuneiforme sumeria (circa 3500 a.C.) y los jeroglíficos..."
            },
            {
                title: "2. Sociolingüística y Registros de Habla",
                text: "El idioma español se diversifica a través de dialectos geográficos..."
            }
        ]
    },
    // Bloques 2, 3, 4 y 5...
};
```

---

### 3.2 Banco de Preguntas Evaluativas (`QUIZ_QUESTIONS`)

Estructura de reactivos formativos para el banco de pruebas:

```typescript
interface QuizQuestionItem {
    question: string;       // Enunciado de la pregunta
    options: string[];      // Lista de 4 opciones de respuesta
    answer: number;         // Índice (0-based) de la opción correcta
    explanation: string;    // Justificación pedagógica de la respuesta
}
```

---

## 4. Manual de Referencia de Funciones JavaScript (`js/main.js`)

A continuación se documentan las funciones que constituyen el núcleo de la aplicación:

### 4.1 `initThemeToggle()`
- **Propósito:** Gestiona la detección, alternancia y persistencia del tema visual (claro / oscuro).
- **Parámetros:** Ninguno.
- **Retorno:** `void`.
- **Comportamiento:**
  1. Lee la clave `'theme'` en `localStorage`.
  2. Si no existe, invoca `window.matchMedia('(prefers-color-scheme: dark)')`.
  3. Establece el atributo `data-theme` en el elemento raíz `<html>`.
  4. Escucha el evento `click` en `#theme-toggle` para alternar entre `'dark'` y `'light'`.

### 4.2 `updateThemeIcon(theme: string)`
- **Propósito:** Sincroniza el glifo del botón conmutador y su etiqueta de accesibilidad.
- **Parámetros:** `theme` (`'dark'` o `'light'`).
- **Retorno:** `void`.
- **Efecto en el DOM:** Coloca `'☀️'` cuando el tema es oscuro y `'🌙'` cuando es claro, actualizando además el atributo `title`.

### 4.3 `initModuleDetailsModal()`
- **Propósito:** Registra los manejadores de eventos delegados para abrir y cerrar la ventana modal de módulos curriculares.
- **Parámetros:** Ninguno.
- **Retorno:** `void`.
- **Comportamiento:**
  - Asocia eventos de clic a todos los botones con la clase `.js-open-module`.
  - Extrae el atributo `data-module-id`.
  - Invoca `renderModuleModalContent()` y activa la clase `.active` en `#module-modal`.
  - Maneja el cierre ante clics en `#modal-close` o en el fondo atenuado del modal.

### 4.4 `renderModuleModalContent(data: ModuleItem)`
- **Propósito:** Genera el marcado HTML dinámico para la descripción, lista de temas y secciones detalladas del módulo seleccionado.
- **Parámetros:** `data` (Objeto con la estructura de un módulo curricular).
- **Retorno:** `void`.
- **Efecto en el DOM:** Inyecta de forma segura el texto en `#modal-title`, `#modal-badge` y el árbol HTML estructurado en `#modal-body-content`.

### 4.5 `initEssayBuilder()`
- **Propósito:** Implementa un generador reactivo en tiempo real del esquema analítico del ensayo argumentativo.
- **Parámetros:** Ninguno.
- **Retorno:** `void`.
- **Elementos escuchados:**
  - `#essay-topic` (Input de texto: Tema central).
  - `#essay-thesis` (Input de texto: Tesis debatible).
  - `#essay-arg` (Textarea: Argumento de respaldo o evidencia).
- **Evento:** `input` (Permite actualizar el borrador inmediatamente mientras el estudiante escribe).

### 4.6 `initFlashcards()`
- **Propósito:** Concede interacción táctil y por clic a las tarjetas de figuras literarias.
- **Parámetros:** Ninguno.
- **Retorno:** `void`.
- **Efecto en el DOM:** Conmuta la clase CSS `.flipped` sobre el contenedor `.flashcard`, disparando la transformación CSS 3D correspondiente.

### 4.7 `initAutoevaluacion()`
- **Propósito:** Motor evaluativo principal que valida respuestas, calcula la calificación cuantitativa en base 10.0 y compone el diagnóstico cualitativo.
- **Parámetros:** Ninguno.
- **Retorno:** `void`.
- **Lógica de Calificación:**
  $$\text{Calificación} = \left(\frac{\sum_{i=1}^{3} \text{valor}(q_i)}{3}\right) \times 10.0$$
- **Validaciones:**
  - Si falta contestar alguna pregunta, despliega un toast con estado de advertencia (`⚠️`).
  - Si las tres preguntas fueron completadas, calcula la nota con 1 decimal y genera el desglose analítico.

### 4.8 `showFloatingToast(contentHTML: string)` y `closeFloatingToast()`
- **Propósito:** Servicio de notificaciones flotantes con soporte para retroalimentación pedagógica y alertas de validación.
- **Parámetros:** `contentHTML` (Fragmento HTML que conforma el cuerpo del mensaje).
- **Retorno:** `void`.
- **Comportamiento:**
  - `closeFloatingToast()` verifica si existe el elemento `#floating-feedback-toast` y lo remueve del DOM.
  - `showFloatingToast()` crea un nuevo contenedor `div` con clase `.floating-feedback-toast` y lo anexa a `document.body`.

### 4.9 `initSmoothScroll()`
- **Propósito:** Provee un desplazamiento visualmente continuo al pulsar sobre los enlaces ancla de la plataforma.
- **Parámetros:** Ninguno.
- **Retorno:** `void`.
- **Implementación:** Utiliza `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`.

---

## 5. Sistema de Tokens de Diseño CSS (`css/style.css`)

El diseño de la aplicación está gobernado por variables CSS declaradas en `:root` para modo claro y sobreescritas en `[data-theme="dark"]` para modo oscuro:

### 5.1 Tabla de Tokens de Color y Superficies
| Variable CSS | Valor por Defecto (Modo Claro) | Valor Sobrescrito (Modo Oscuro) | Propósito de Uso |
| :--- | :--- | :--- | :--- |
| `--primary` | `#4f46e5` (Índigo 600) | `#4f46e5` | Color de marca primario, botones principales, enlaces activos |
| `--primary-hover` | `#4338ca` | `#4338ca` | Estado de interacción hover para elementos primarios |
| `--primary-light` | `rgba(79, 70, 229, 0.1)` | `rgba(79, 70, 229, 0.2)` | Fondos de insignias y elementos secundarios suaves |
| `--secondary` | `#0d9488` (Verde Azulado 600) | `#0d9488` | Color secundario y acento de oratoria y éxito |
| `--accent` | `#f59e0b` (Ámbar 500) | `#f59e0b` | Acento para recursos poéticos y ortografía |
| `--accent-rose` | `#e11d48` (Rosa/Rojo 600) | `#e11d48` | Acento para alertas, redacción y textos expositivos |
| `--accent-purple` | `#8b5cf6` (Púrpura 500) | `#8b5cf6` | Acento para literatura y estética lírica |
| `--bg-body` | `#f8fafc` (Gris Pizarra Claro) | `#0b0f19` (Azul Oscuro Profundo) | Fondo general de la página |
| `--bg-card` | `#ffffff` (Blanco Puro) | `#161e2e` (Pizarra Marino) | Superficies elevadas y tarjetas |
| `--bg-card-hover`| `#f1f5f9` | `#1f293d` | Estado hover de tarjetas interactivas |
| `--border-color` | `#e2e8f0` | `#26334d` | Líneas divisorias y contornos de tarjetas |
| `--text-main` | `#0f172a` (Negro Pizarra) | `#f1f5f9` (Blanco Pizarra) | Tipografía principal de alta legibilidad |
| `--text-muted` | `#64748b` | `#94a3b8` | Subtítulos, fechas e información secundaria |

### 5.2 Tokens de Elevación, Efectos y Bordes
```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.04);
--shadow-md: 0 8px 16px -4px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
--shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-glow: 0 0 25px rgba(79, 70, 229, 0.25);

--glass-bg: rgba(255, 255, 255, 0.75); /* En dark: rgba(22, 30, 46, 0.85) */
--glass-border: rgba(255, 255, 255, 0.4);
--glass-blur: blur(12px);

--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-full: 9999px;
```

---

## 6. Plan de Pruebas de Software (Testing Funcional)

Para verificar el correcto funcionamiento de la plataforma en despliegues o actualizaciones, se aplica la siguiente matriz de pruebas de caja negra:

| ID de Prueba | Caso de Prueba | Entrada / Acción | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| **TC-01** | Conmutación de tema claro a oscuro | Clic en `#theme-toggle` | El atributo `data-theme` pasa a `'dark'`, el icono cambia a `☀️`, la clave en `localStorage` almacena `'dark'` y los colores se actualizan fluidamente. |
| **TC-02** | Persistencia del tema | Recargar la página (F5) tras activar tema oscuro | La página se inicia directamente con `data-theme="dark"` sin parpadeos luminosos (*Flash of Unstyled Content*). |
| **TC-03** | Apertura de modal de bloque | Clic en "Ver Detalle" del Bloque 3 (Lectura Crítica) | Se despliega `#module-modal` con título "Lectura: Textos de Divulgación Científica y Novela Policial" y sus 2 secciones detalladas. |
| **TC-04** | Validación de cuestionario incompleto | Clic en "Calcular Calificación" habiendo respondido solo 1 pregunta | Se despliega un Toast flotante de advertencia: *"Preguntas Incompletas: Por favor responde las 3 preguntas antes de calcular tu calificación"*. |
| **TC-05** | Calificación perfecta en cuestionario | Marcar respuestas correctas en q1, q2 y q3 y calcular | Se despliega Toast flotante con insignia "Calificación: 10.0 / 10 pts", icono 🎉 y las 3 preguntas marcadas con ✅. |
| **TC-06** | Reactividad del Taller de Ensayo | Escribir en "Tema" y "Tesis" | El bloque `#essay-preview-output` se actualiza instantáneamente formateando el tema con 🎯 y la tesis con 💡. |
| **TC-07** | Animación 3D de Flashcards | Clic en la tarjeta "Metáfora" | La tarjeta gira 180 grados sobre su eje Y revelando su concepto y el ejemplo *"Las perlas de tu boca"*. |

---

## 7. Guía de Mantenimiento y Extensibilidad Modular
 
### A. Cómo agregar un nuevo Bloque Curricular
1. Abre el archivo modular [`views/modulos.html`](file:///c:/Users/HP/Documents/Lengua-Literatura-9no/views/modulos.html).
2. Dentro de `.modules-grid`, añade un nuevo elemento `<article class="module-card" data-module="6">...</article>` con su botón `<button class="btn btn-secondary js-open-module" data-module-id="6">Ver Detalle</button>`.
3. Abre el archivo [`js/data/modulesData.js`](file:///c:/Users/HP/Documents/Lengua-Literatura-9no/js/data/modulesData.js) y dentro de `MODULES_DATA`, añade la clave `6`:
   ```javascript
   6: {
       title: "Título del Nuevo Módulo",
       badge: "Bloque 06",
       description: "Descripción pedagógica...",
       topics: ["Tema A", "Tema B"],
       details: [
           { title: "1. Subtema", text: "Texto detallado..." }
       ]
   }
   ```
4. Guarda los archivos. El nuevo bloque estará automáticamente integrado en la vista de módulos y el modal.

### B. Cómo añadir una nueva Figura Literaria
1. Abre [`views/figuras.html`](file:///c:/Users/HP/Documents/Lengua-Literatura-9no/views/figuras.html).
2. En `.figures-grid`, inserta un nuevo bloque `.flashcard`:
   ```html
   <div class="flashcard">
       <div class="flashcard-inner">
           <div class="flashcard-front">
               <span class="card-icon">⚡</span>
               <h2>Anáfora</h2>
               <p>Toca para voltear 🔄</p>
           </div>
           <div class="flashcard-back">
               <strong>Repetición deliberada de una o más palabras al inicio de versos sucesivos.</strong>
               <em>"Temprano levantó la muerte el vuelo, temprano madrugó la madrugada"</em>
           </div>
       </div>
   </div>
   ```
3. Guarda el archivo. [`js/modules/flashcards.js`](file:///c:/Users/HP/Documents/Lengua-Literatura-9no/js/modules/flashcards.js) detecta dinámicamente cualquier nueva tarjeta en el DOM sin tocar scripts.
