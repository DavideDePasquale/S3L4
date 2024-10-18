const tabellone = document.getElementById('tabellone'); 
const estraiBtn = document.getElementById('estraiBtn'); 
const cartella = document.getElementById('cartella');

const numeriEstratti = []; //è un'array vuoto, dovranno essere inseriti i numeri estratti.
const numeriCartella =[];

function creaTabellone() {
    
    for (let i = 1; i <= 90; i++) {
        const cella = document.createElement('div');  //si crea un div con costante cella
        cella.classList.add('cella'); //si aggiunge una classe al div (chiamato cella)
        cella.textContent = i; // contenuto testo interno è uguale all'indice.
        cella.id = 'cella' + i; //classe cella formerà le celle+indice.. cella1 cella2 fino a 90
        tabellone.appendChild(cella); //al padre tabellone, viene collegato il figlio "cella"
    }
};



function creaCartellina(){
    for(let i=1; i<=24; i++) {
        const cartellina = document.createElement("div");
        cartellina.classList.add("cartellina");
        cartellina.textContent = i;
        cartellina.id = "cartellina" + i;
        cartella.appendChild(cartellina);
    }
}




function estraiNumero() {
    
    
    if (numeriEstratti.length >= 90) { //lunghezza massima dei num estratti deve essere >= a 90 per far si che non si attivi l'allert
        alert("Tutti i numeri sono stati estratti!"); //quando esce dall'if, si attiva l'allert
       return;
    }

    
    let numeroEstratto;

    
    do {
        numeroEstratto = Math.floor(Math.random() * 90) +1 ; 
    } while (numeriEstratti.includes(numeroEstratto)); 

    
    numeriEstratti.push(numeroEstratto);

    
    const cellaEstratta = document.getElementById('cella' + numeroEstratto); 
    cellaEstratta.classList.add('estratta'); 
}


estraiBtn.addEventListener('click', estraiNumero); 
//estraiBtn.addEventListener('click', );

creaTabellone();
creaCartellina();