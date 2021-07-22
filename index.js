const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('');

fetch("noms.json").then(function(response) {
    if (response.ok) {
        return response.json();
    }
}).then(data => {
    let table = document.querySelector('table');
    if (data.length > 0)
    {
        let premier = data[0];
        let ligne = document.createElement('tr');
        for (let item in premier) {
            let cellule = document.createElement('th');
            cellule.innerText = capitalizeFirstLetter(item);
            ligne.appendChild(cellule);
        }
        table.appendChild(ligne);
        for (let enregistrement of data) {
            ligne = document.createElement('tr');
            for (let champ in enregistrement) {
                cellule = document.createElement('td');
                cellule.innerText = enregistrement[champ];
                ligne.appendChild(cellule);
            }
            table.appendChild(ligne);
        }
    }
});