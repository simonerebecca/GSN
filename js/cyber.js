// Wacht totdat de DOM volledig is geladen
document.addEventListener('DOMContentLoaded', function() {
    // Cyberaanvallen data ophalen en weergeven op de cyberaanvallen pagina
    if (window.location.pathname.includes('cyberaanvallen.html')) { // Zorgt ervoor dat de code alleen draait op de juiste pagina
        const cyberaanvallenInfo = document.getElementById('cyberaanvallen-info');
        
        // Haal de data op van de website met de fetch API
        fetch('https://www.ccinfo.nl/menu-nieuws-trends/actuele-cyberaanvallen')
            .then(response => response.text())
            .then(data => {
                // Parser de HTML response om de relevante inhoud eruit te halen
                let parser = new DOMParser();
                let htmlDoc = parser.parseFromString(data, 'text/html');

                // Zoek de juiste elementen in de HTML van de externe pagina (pas de selectors aan op basis van de werkelijke structuur)
                let headlines = htmlDoc.querySelectorAll('.cyber-aanval-item'); // Dit is een voorbeeld, pas het aan naar de juiste selector

                let content = '';
                headlines.forEach(headline => {
                    let title = headline.querySelector('.title'); // Pas deze selector aan naar de juiste
                    let description = headline.querySelector('.description');
                    
                    content += `
                        <div class="cyberaanval-item">
                            <h3>${title ? title.textContent : 'Geen titel'}</h3>
                            <p>${description ? description.textContent : 'Geen beschrijving'}</p>
                        </div>
                    `;
                });

                // Zet de dynamische content in de juiste div op de pagina
                cyberaanvallenInfo.innerHTML = content;
            })
            .catch(error => {
                console.error('Fout bij het ophalen van de data:', error);
                cyberaanvallenInfo.innerHTML = '<p>Er is een fout opgetreden bij het laden van de data.</p>';
            });
    }
});
