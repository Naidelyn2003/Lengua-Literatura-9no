/**
 * Lengua y Literatura 9no EGB - Controlador de Modal de Módulos Curriculares
 * Unidad Educativa Fiscomisional San Lorenzo
 */

function initModuleDetailsModal() {
    const modal = document.getElementById('module-modal');
    const closeBtn = document.getElementById('modal-close');
    const openBtns = document.querySelectorAll('.js-open-module');

    if (!modal) return;

    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const moduleId = btn.getAttribute('data-module-id');
            const data = (window.MODULES_DATA && window.MODULES_DATA[moduleId]) ? window.MODULES_DATA[moduleId] : null;
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

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
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
        html += `<h4 style="margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--primary); font-weight:700;">Temas Principales:</h4>`;
        html += `<ul style="margin-left: 1.25rem; margin-bottom: 1.5rem;">`;
        data.topics.forEach(t => {
            html += `<li style="margin-bottom: 0.4rem;">${t}</li>`;
        });
        html += `</ul>`;

        html += `<h4 style="margin-bottom: 0.75rem; color: var(--primary); font-weight:700;">Desarrollo del Bloque:</h4>`;
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

// Exportación global y modular
if (typeof window !== 'undefined') {
    window.initModuleDetailsModal = initModuleDetailsModal;
    window.renderModuleModalContent = renderModuleModalContent;
}
