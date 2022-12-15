function multiTable(a) {
    const multiTable = document.getElementById('multiTable')
    multiTable.addEventListener('click', () => {
        // mettre votre code ici 
        document.getElementById('resultat').innerHTML += a;
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
        if a + b < c
            print('c superieur')
        else
            print('c inferieur')
    })
}

fonctionACorriger(9, 7);

function retourner_un_tableau(tab) {
    const retournerUnTableau = document.getElementById('retournerUnTableau')
    retournerUnTableau.addEventListener('click', () => {
        // mettre votre code ici 
    })
}

let tab = [8, 5, 7, 9]

retourner_un_tableau(tab)