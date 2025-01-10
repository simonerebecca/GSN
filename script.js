document.addEventListener('DOMContentLoaded', () => {
    // Fetch actuele analyses
    const analysisContainer = document.getElementById('analysis-container');
    const analyses = [
        { title: 'Cyberaanval Trends', content: 'Een overzicht van de meest recente cyberaanvallen wereldwijd.' },
        { title: 'Klimaat en Veiligheid', content: 'Hoe klimaatverandering invloed heeft op internationale veiligheid.' },
        { title: 'Terrorisme Dreiging', content: 'Analyse van de huidige terreurdreigingen in Europa.' }
    ];

    analyses.forEach(analysis => {
        const analysisDiv = document.createElement('div');
        analysisDiv.innerHTML = `<h3>${analysis.title}</h3><p>${analysis.content}</p>`;
        analysisContainer.appendChild(analysisDiv);
    });

    // Fetch data van toonaangevende bronnen
    const dataList = document.getElementById('data-list');
    const dataSources = [
        { name: 'Europol', link: 'https://www.europol.europa.eu' },
        { name: 'Interpol', link: 'https://www.interpol.int' },
        { name: 'IPCC', link: 'https://www.ipcc.ch' }
    ];

    dataSources.forEach(source => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${source.link}" target="_blank">${source.name}</a>`;
        dataList.appendChild(listItem);
    });
});
