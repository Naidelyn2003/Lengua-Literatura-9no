/**
 * Lengua y Literatura 9no EGB - Servicio de Notificaciones Toast
 * Unidad Educativa Fiscomisional San Lorenzo
 */

function showFloatingToast(contentHTML) {
    closeFloatingToast(); // Eliminar toast previo si existe

    const toastDiv = document.createElement('div');
    toastDiv.id = 'floating-feedback-toast';
    toastDiv.className = 'floating-feedback-toast';
    toastDiv.innerHTML = contentHTML;

    document.body.appendChild(toastDiv);
}

function closeFloatingToast() {
    const existing = document.getElementById('floating-feedback-toast');
    if (existing) {
        existing.remove();
    }
}

// Exportación global y modular
if (typeof window !== 'undefined') {
    window.showFloatingToast = showFloatingToast;
    window.closeFloatingToast = closeFloatingToast;
}
