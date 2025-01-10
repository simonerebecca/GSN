document.addEventListener('DOMContentLoaded', function() {
    // Hier kunnen we bijvoorbeeld dynamische data toevoegen voor elk dreigingsgebied.
    // Dit zou normaal gesproken uit een API kunnen komen, maar we gebruiken statische data in dit voorbeeld.

    const terrorismeData = {
        title: "Actuele terrorisme informatie",
        content: "De wereld ziet een toename in terroristische dreigingen, vooral in gebieden zoals het Midden-Oosten, Afrika en Zuid-Azië. Aantal incidenten is gestegen in 2024."
    };

    const cyberaanvallenData = {
        title: "Cyberaanvallen in 2024",
        content: "Cyberaanvallen tegen bedrijven en overheden wereldwijd zijn met 30% gestegen. Beschermingsmaatregelen tegen ransomware-aanvallen worden steeds belangrijker."
    };

    const conflictenData = {
        title: "Conflicten wereldwijd",
        content: "Er zijn momenteel gewapende conflicten in Oekraïne, Syrië en verschillende Afrikaanse landen. De impact op de veiligheid blijft toenemen."
    };

    const klimaatData = {
        title: "Klimaatverandering en veiligheid",
        content: "Klimaatverandering zorgt voor meer natuurrampen, wat de veiligheid van bevolkingsgroepen verstoort. Stormen, overstromingen en droogte hebben een directe invloed op de politieke stabiliteit."
    };

    // Vul de secties met de data
    document.getElementById('terrorisme-info').innerHTML = `<h4>${terrorismeData.title}</h4><p>${terrorismeData.content}</p>`;
    document.getElementById('cyberaanvallen-info').innerHTML = `<h4>${cyberaanvallenData.title}</h4><p>${cyberaanvallenData.content}</p>`;
    document.getElementById('conflicten-info').innerHTML = `<h4>${conflictenData.title}</h4><p>${conflictenData.content}</p>`;
    document.getElementById('klimaatverandering-info').innerHTML = `<h4>${klimaatData.title}</h4><p>${klimaatData.content}</p>`;
});

