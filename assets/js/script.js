// Navegación suave al hacer clic en los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto de transparencia en el header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Manejo del formulario de contacto
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener datos del formulario
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Aquí normalmente se enviarían los datos al servidor
        console.log('Form submitted:', data);
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
        this.reset();
    });
}

// Arrays con las rutas de las imágenes para películas y series
const contentItems = document.querySelectorAll('.content-item');
const movies = [
    'assets/img/armario.jpg',
    'assets/img/futuro.jpg',
    'assets/img/naranja.jpg',
    'assets/img/mini.jpg'
];

const series = [
    'assets/img/zombi.jpg',
    'assets/img/you.jpg',
    'assets/img/naruto.jpg',
    'assets/img/casa.jpg'
];

// Agregar efecto hover y botón de reproducción a cada elemento de contenido
contentItems.forEach((item, index) => {
    // Crear overlay con información y botón de reproducción
    const overlay = document.createElement('div');
    overlay.className = 'content-overlay';
    overlay.innerHTML = `
        <div class="overlay-content">
            <h4>contenido exclusivo</h4>
            <p>Descripción</p>
            <button class="play-button"><i class="fas fa-play"></i> Reproducir</button>
        </div>
    `;
    item.appendChild(overlay);

    // Agregar evento de clic al botón de reproducción
    const playButton = overlay.querySelector('.play-button');
    playButton.addEventListener('click', function(e) {
        e.stopPropagation();
        // Aquí normalmente se abriría el reproductor de video
        alert('Reproduciendo contenido...');
    });
});

// Asignar imágenes a las secciones de películas y series
const movieItems = document.querySelectorAll('.category:first-child .content-item');
const seriesItems = document.querySelectorAll('.category:last-child .content-item');

movieItems.forEach((item, index) => {
    if (movies[index]) {
        item.style.backgroundImage = `url(${movies[index]})`;
    }
});

seriesItems.forEach((item, index) => {
    if (series[index]) {
        item.style.backgroundImage = `url(${series[index]})`;
    }
});

// Funcionalidad de los modales
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginCloseBtn = document.querySelector('#loginModal .close-modal');
    const registerCloseBtn = document.querySelector('#registerModal .close-modal');
    const closeLoginFormBtn = document.getElementById('closeLoginForm');

    // Abrir modal de login
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });
    }

    // Abrir modal de registro
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            registerModal.style.display = 'block';
        });
    }

    // Cerrar modal de login con la X
    if (loginCloseBtn) {
        loginCloseBtn.addEventListener('click', () => {
            if (loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    // Cerrar modal de registro con la X
    if (registerCloseBtn) {
        registerCloseBtn.addEventListener('click', () => {
            if (registerModal) {
                registerModal.style.display = 'none';
            }
        });
    }

    // Cerrar formulario de login con el botón Cancelar
    if (closeLoginFormBtn) {
        closeLoginFormBtn.addEventListener('click', () => {
            if (loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
});

// Manejo del formulario de registro
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro
    alert('Registro exitoso');
    registerModal.style.display = 'none';
});

// Funcionalidad del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contacto form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const nombre = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const tema = this.querySelector('select').value;
            const consulta = this.querySelector('textarea').value;
            
            // Validar que todos los campos estén llenos
            if (!nombre || !email || !tema || !consulta) {
                alert('Por favor, complete todos los campos del formulario');
                return;
            }
            
            // Aquí normalmente se enviarían los datos al servidor
            console.log('Datos del formulario:', {
                nombre,
                email,
                tema,
                consulta
            });
            
            // Mostrar mensaje de éxito
            alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
            
            // Limpiar el formulario
            this.reset();
        });
    }
}); 