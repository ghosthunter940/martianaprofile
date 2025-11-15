document.addEventListener("DOMContentLoaded", function() {

    // ======== FUNGSI MENU HAMBURGER ========
    const hamburger = document.querySelector('.hamburger span');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Ganti ikon menu menjadi 'close' (X)
        if (navLinks.classList.contains('active')) {
            hamburger.textContent = 'close';
        } else {
            hamburger.textContent = 'menu';
        }
    });

    // Menutup menu saat link di-klik (untuk mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                hamburger.textContent = 'menu';
            }
        });
    });


    // ======== FUNGSI ANIMASI FADE-IN SAAT SCROLL ========
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi
            }
        });
    }, { threshold: 0.1 }); // Muncul saat 10% bagian terlihat

    // Observasi setiap section
    sections.forEach(section => {
        observer.observe(section);
    });

});