/**
 * Lengua y Literatura 9no EGB - Controlador del Taller de Ensayo Argumentativo
 * Unidad Educativa Fiscomisional San Lorenzo
 */

function initEssayBuilder() {
    const topicInput = document.getElementById('essay-topic');
    const thesisInput = document.getElementById('essay-thesis');
    const argInput = document.getElementById('essay-arg');
    const previewBox = document.getElementById('essay-preview-output');

    if (!topicInput && !thesisInput && !argInput) return;

    const updatePreview = () => {
        if (!previewBox) return;
        const topic = topicInput ? topicInput.value.trim() : '';
        const thesis = thesisInput ? thesisInput.value.trim() : '';
        const arg = argInput ? argInput.value.trim() : '';

        if (!topic && !thesis && !arg) {
            previewBox.innerHTML = `<em style="color: var(--text-muted);">Escribe en los campos para generar el esquema de tu ensayo argumentativo en tiempo real.</em>`;
            return;
        }

        previewBox.innerHTML = `
            <div style="font-size: 0.95rem; line-height: 1.6;">
                <div style="margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px dashed var(--border-color);">
                    <strong style="color: var(--primary);">🎯 Tema central:</strong>
                    <span style="display: block; margin-top: 0.2rem; color: var(--text-main); font-weight: 500;">
                        ${topic || '<span style="color:var(--text-muted); font-style:italic;">(Sin tema definido)</span>'}
                    </span>
                </div>
                <div style="margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px dashed var(--border-color);">
                    <strong style="color: var(--secondary);">💡 Tesis argumentativa:</strong>
                    <span style="display: block; margin-top: 0.2rem; color: var(--text-main); font-style: italic;">
                        "${thesis || '<span style="color:var(--text-muted); font-style:normal;">Escribe tu posición aquí...</span>'}"
                    </span>
                </div>
                <div>
                    <strong style="color: var(--accent-rose);">🛡️ Argumento principal / Evidencia:</strong>
                    <p style="margin-top: 0.2rem; color: var(--text-main); margin-bottom: 0;">
                        ${arg || '<span style="color:var(--text-muted); font-style:italic;">Describe la evidencia o cita que respalda tu tesis...</span>'}
                    </p>
                </div>
            </div>
        `;
    };

    [topicInput, thesisInput, argInput].forEach(el => {
        if (el) el.addEventListener('input', updatePreview);
    });

    // Botón de limpiar borrador si existe
    const resetBtn = document.getElementById('btn-limpiar-ensayo');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (topicInput) topicInput.value = '';
            if (thesisInput) thesisInput.value = '';
            if (argInput) argInput.value = '';
            updatePreview();
        });
    }
}

// Exportación global y modular
if (typeof window !== 'undefined') {
    window.initEssayBuilder = initEssayBuilder;
}
