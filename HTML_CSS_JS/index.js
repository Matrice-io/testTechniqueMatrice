function multiTable(a) {
    const multiTable = document.getElementById('multiTable')
    multiTable.addEventListener('click', () => {
        // mettre votre code ici 
        document.getElementById('resultat').innerHTML += a *= a;
        document.getElementById('resultat').innerHTML += '<br/>';
    })
}

multiTable(5);
multiTable(4);
multiTable(9);


function fonctionACorriger(a, b) {
    const fonctionACorriger = document.getElementById('fonctionACorriger')
    fonctionACorriger.addEventListener('click', () => {
        let c = 15
        if (a + b < c) {
            document.getElementById('resultat2').innerHTML += 'c superieur';
            document.getElementById('resultat2').innerHTML += '<br/>';
        }
        else {
            document.getElementById('resultat2').innerHTML += 'c inferieur';
            document.getElementById('resultat2').innerHTML += '<br/>';
        }
    })
}

fonctionACorriger(9, 7);

function retourner_un_tableau(tab) {
    const retournerUnTableau = document.getElementById('retournerUnTableau')
    retournerUnTableau.addEventListener('click', () => {
        tab.forEach(element => {
            document.getElementById('resultat3').innerHTML += element;
            document.getElementById('resultat3').innerHTML += '<br/>'; 
        });
    })
}

let tab = [8, 5, 7, 9]

retourner_un_tableau(tab)