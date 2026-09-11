/**
 * Lengua y Literatura 9no EGB - Motor de Evaluación y Diagnóstico
 * Unidad Educativa Fiscomisional San Lorenzo
 */

function initAutoevaluacion() {
    const btnCalcular = document.getElementById('btn-calcular-calificacion');
    if (!btnCalcular) return;

    btnCalcular.addEventListener('click', () => {
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');

        // Validar que se hayan respondido las 3 preguntas
        if (!q1 || !q2 || !q3) {
            const toastError = `
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
            `;
            if (typeof showFloatingToast === 'function') {
                showFloatingToast(toastError);
            }
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
            descMessage = 'Obtuviste 2 de 3 respuestas correctas (6.7/10). Te recomendamos revisar las lecciones para perfeccionar el tema fallido.';
        } else if (correctCount <= 1) {
            badgeColor = 'badge-amber';
            icon = '📚';
            titleMessage = '¡Sigue Practicando!';
            descMessage = 'Te sugerimos repasar los módulos y lecciones interactivas para reforzar tus conocimientos de 9no EGB.';
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
                <div><strong>1. Novela Policial:</strong> ${val1 === 1 ? '<span style="color:#10b981;">✅ Correcto</span>' : '<span style="color:#e11d48;">❌ Incorrecto (Esclarecimiento de enigma con pistas)</span>'}</div>
                <div><strong>2. Uso de G / J:</strong> ${val2 === 1 ? '<span style="color:#10b981;">✅ Correcto</span>' : '<span style="color:#e11d48;">❌ Incorrecto (Geografía, viaje, recoger, dijeron)</span>'}</div>
                <div><strong>3. Texto Expositivo:</strong> ${val3 === 1 ? '<span style="color:#10b981;">✅ Correcto</span>' : '<span style="color:#e11d48;">❌ Incorrecto (Información clara y objetiva)</span>'}</div>
            </div>
        `;

        if (typeof showFloatingToast === 'function') {
            showFloatingToast(toastHTML);
        }
    });

    // Soporte para reiniciar cuestionario
    const btnReiniciar = document.getElementById('btn-reiniciar-cuestionario');
    if (btnReiniciar) {
        btnReiniciar.addEventListener('click', () => {
            const form = document.getElementById('autoevaluacion-form');
            if (form) form.reset();
            if (typeof closeFloatingToast === 'function') closeFloatingToast();
        });
    }
}

// Exportación global y modular
if (typeof window !== 'undefined') {
    window.initAutoevaluacion = initAutoevaluacion;
}
