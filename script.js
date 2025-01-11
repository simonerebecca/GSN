// Dynamische data kan hier worden toegevoegd via JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const terrorismeInfo = document.getElementById("terrorisme-info");
    const cyberaanvallenInfo = document.getElementById("cyberaanvallen-info");
    const conflictenInfo = document.getElementById("conflicten-info");
    const klimaatveranderingInfo = document.getElementById("klimaatverandering-info");

    // Voorbeeld van dynamische gegevens toevoegen
    terrorismeInfo.innerHTML += "<p>Nieuwe gegevens over terrorisme worden hier weergegeven...</p>";
    cyberaanvallenInfo.innerHTML += "<p>Recente cyberaanvallen worden hier weergegeven...</p>";
    conflictenInfo.innerHTML += "<p>Details over conflicten wereldwijd worden hier weergegeven...</p>";
    klimaatveranderingInfo.innerHTML += "<p>Recente analyses van klimaatverandering worden hier weergegeven...</p>";
});

