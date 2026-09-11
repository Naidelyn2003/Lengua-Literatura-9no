/**
 * Lengua y Literatura 9no EGB - Controlador de Flashcards 3D (Figuras Literarias)
 * Unidad Educativa Fiscomisional San Lorenzo
 */

function initFlashcards() {
    const flashcards = document.querySelectorAll('.flashcard');
    
    flashcards.forEach(card => {
        // Toggle por clic
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        // Soporte de accesibilidad con teclado (Enter o Espacio)
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Tarjeta interactiva de figura literaria. Presiona para voltear.');
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('flipped');
            }
        });
    });

    // Botón para voltear todas a la vez si existe
    const flipAllBtn = document.getElementById('btn-voltear-todas');
    if (flipAllBtn) {
        flipAllBtn.addEventListener('click', () => {
            const anyUnflipped = Array.from(flashcards).some(c => !c.classList.contains('flipped'));
            flashcards.forEach(c => {
                if (anyUnflipped) {
                    c.classList.add('flipped');
                } else {
                    c.classList.remove('flipped');
                }
            });
        });
    }
}

// Exportación global y modular
if (typeof window !== 'undefined') {
    window.initFlashcards = initFlashcards;
}
