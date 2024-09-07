// Função para alternar a visibilidade do dropdown de localização
function toggleLocation() {
    const locationContent = document.getElementById('location-content');
    
    if (locationContent.style.display === 'block') {
        locationContent.style.display = 'none';
    } else {
        locationContent.style.display = 'block';
        locationContent.innerHTML = `
            <p>Endereço do Salão de Festas XYZ</p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3822.9772942733957!2d-49.31619262485206!3d-16.62790868413549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDM3JzQwLjUiUyA0OcKwMTgnNDkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1725675408017!5m2!1spt-BR!2sbr" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        `;
    }
}

// Animações com GSAP
document.addEventListener('DOMContentLoaded', () => {
    // Animação das borboletas
    gsap.fromTo(".butterfly", 
        { scale: 0, y: 500 }, 
        { scale: 1, y: 0, duration: 2, stagger: 0.5, ease: "back.out(1.7)" }
    );

    // Animação das flores
    gsap.fromTo(".flower", 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.5, stagger: 0.3, ease: "elastic.out(1, 0.75)" }
    );

    gsap.fromTo(".invitation-card", 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 1.5, delay: 1, ease: "power3.out" }
    );

    // Animação das partículas douradas
    gsap.to(".particles::before", {
        yPercent: -100,
        repeat: -1,
        duration: 2,
        ease: "linear",
        opacity: 0.5,
        stagger: {
            each: 0.1,
            from: "random"
        }
    });
});