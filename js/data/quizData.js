/**
 * Lengua y Literatura 9no EGB - Banco de Preguntas y Evaluación
 * Unidad Educativa Fiscomisional San Lorenzo
 */

const QUIZ_QUESTIONS = [
    {
        id: 1,
        topic: "Literatura",
        question: "¿Cuál fue el primer sistema de escritura conocido en la historia humana?",
        options: ["Alfabeto latino", "Jeroglíficos mayas", "Escritura cuneiforme sumeria", "Ideogramas chinos"],
        answer: 2,
        explanation: "La escritura cuneiforme fue desarrollada por los sumerios en Mesopotamia alrededor del 3500 a.C."
    },
    {
        id: 2,
        topic: "Literatura",
        question: "¿Qué figura literaria consiste en atribuir cualidades humanas a objetos inanimados o animales?",
        options: ["Hipérbole", "Personificación o Prosopopeya", "Metáfora", "Anáfora"],
        answer: 1,
        explanation: "La personificación otorga rasgos humanos (emociones, acciones) a elementos que no los poseen."
    },
    {
        id: 3,
        topic: "Redacción",
        question: "¿Cuál es el objetivo principal de un ensayo argumentativo?",
        options: [
            "Contar una historia ficticia de aventuras",
            "Defender una postura o tesis con razones fundadas",
            "Explicar un experimento químico paso a paso",
            "Dar instrucciones de uso para un aparato"
        ],
        answer: 1,
        explanation: "El ensayo argumentativo busca persuadir o convencer al lector sobre una tesis específica utilizando argumentos lógicos."
    },
    {
        id: 4,
        topic: "Ortografía y Conectores",
        question: "¿Qué conector textual expresa oposición entre dos ideas?",
        options: ["Por lo tanto", "Sin embargo", "Además", "En primer lugar"],
        answer: 1,
        explanation: "'Sin embargo' es un conector adversativo u de oposición."
    }
];

// Exportación global en navegador y compatibilidad con entornos modulares
if (typeof window !== 'undefined') {
    window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUIZ_QUESTIONS;
}
