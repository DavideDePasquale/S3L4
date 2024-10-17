const tabellone = document.getElementById('tabellone'); 
const estraiBtn = document.getElementById('estraiBtn'); 


const numeriEstratti = [];


function creaTabellone() {
    
    for (let i = 1; i <= 76; i++) {
        const cella = document.createElement('div'); 
        cella.classList.add('cella'); 
        cella.textContent = i; 
        cella.id = 'cella-' + i;
        tabellone.appendChild(cella); 
    }
}


function estraiNumero() {
    
    if (numeriEstratti.length >= 76) {
        alert("Tutti i numeri sono stati estratti!"); 
        return; 
    }

    
    let numeroEstratto;

    
    do {
        numeroEstratto = Math.floor(Math.random() * 76) + 1; 
    } while (numeriEstratti.includes(numeroEstratto)); 

    
    numeriEstratti.push(numeroEstratto);

    
    const cellaEstratta = document.getElementById('cella-' + numeroEstratto); 
    cellaEstratta.classList.add('estratta'); 
}


estraiBtn.addEventListener('click', estraiNumero); 


creaTabellone();