/**
 * Lengua y Literatura 9no EGB - Controlador de Navegación
 * Unidad Educativa Fiscomisional San Lorenzo
 */

function initNavigation() {
    highlightActiveNavLink();
    initSmoothScroll();
    initMobileMenu();
}

function highlightActiveNavLink() {
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-links .nav-link');

    navLinks.forEach(link => {
        const href = (link.getAttribute('href') || '').toLowerCase();
        
        // Quitar clase active inicial
        link.classList.remove('active');

        // Comparar según el archivo actual
        if (currentPath.endsWith('modulos.html') && href.includes('modulos.html')) {
            link.classList.add('active');
        } else if (currentPath.endsWith('lecciones.html') && href.includes('lecciones.html')) {
            link.classList.add('active');
        } else if (currentPath.endsWith('taller.html') && href.includes('taller.html')) {
            link.classList.add('active');
        } else if (currentPath.endsWith('figuras.html') && href.includes('figuras.html')) {
            link.classList.add('active');
        } else if (currentPath.endsWith('cuestionario.html') && href.includes('cuestionario.html')) {
            link.classList.add('active');
        } else if ((currentPath.endsWith('index.html') || currentPath.endsWith('/') || !currentPath.includes('.')) && (href === '#' || href.endsWith('index.html') || href === '#inicio')) {
            link.classList.add('active');
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const isVisible = window.getComputedStyle(navLinks).display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--bg-card)';
            navLinks.style.padding = '1.5rem';
            navLinks.style.borderBottom = '1px solid var(--border-color)';
            navLinks.style.boxShadow = 'var(--shadow-md)';
        });
    }
}

// Exportación global y modular
if (typeof window !== 'undefined') {
    window.initNavigation = initNavigation;
    window.initSmoothScroll = initSmoothScroll;
}
