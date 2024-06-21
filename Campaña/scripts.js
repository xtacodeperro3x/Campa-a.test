// Archivo: scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById('page-title');
    const artworks = document.querySelectorAll('.artwork');

    // Aparece el título
    setTimeout(() => {
        title.classList.add('fade-in');
    }, 500); // Espera 500 ms antes de mostrar el título

    // Aparece cada diseño secuencialmente
    artworks.forEach((artwork, index) => {
        setTimeout(() => {
            artwork.classList.add('fade-in');
        }, (index + 1) * 500); // Espera 500 ms por cada diseño
    });
});
