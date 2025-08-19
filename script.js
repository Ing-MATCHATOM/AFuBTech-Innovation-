// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer tous les éléments images zoomables (membres + logo)
    const zoomableImages = document.querySelectorAll('.zoomable-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('close-btn');

    // Ajouter un événement de clic à chaque image
    zoomableImages.forEach(image => {
        image.addEventListener('click', function() {
            // Afficher la lightbox avec l'image cliquée
            lightbox.classList.add('show');
            lightboxImage.src = this.src;
            lightboxCaption.textContent = this.alt;
            
            // Ajouter une classe spécifique si c'est le logo
            if (this.classList.contains('logo')) {
                lightbox.classList.add('logo-lightbox');
            } else {
                lightbox.classList.remove('logo-lightbox');
            }
            
            // Empêcher le défilement de la page en arrière-plan
            document.body.style.overflow = 'hidden';
        });
    });

    // Fermer la lightbox en cliquant sur le bouton de fermeture
    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('show', 'logo-lightbox');
        document.body.style.overflow = 'auto';
    });

    // Fermer la lightbox en cliquant à l'extérieur de l'image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('show', 'logo-lightbox');
            document.body.style.overflow = 'auto';
        }
    });

    // Fermer la lightbox avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('show')) {
            lightbox.classList.remove('show', 'logo-lightbox');
            document.body.style.overflow = 'auto';
        }
    });
});