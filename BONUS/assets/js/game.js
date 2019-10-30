

/* ESECUZIONE */

// ciclo che crea 16 numeri diversi tra loro
while (arraySys.length >= 0 && arraySys.length < 16 ){
    num = nRand();
    resultCheck(arraySys, num) //richiamo la funzione che restitusice il risultato dopo il check dei doppi
    i++;
}
console.log(arraySys.sort(function(a, b){return a-b})) //trovata su internet

// ciclo che inserisce numero da prompt
// il numero  viene passato alla func doubleCheck per verificare se è già stato scritto
// il ciclo si chiude quando il numero da prompt esiste nell' arraySys
// output messaggio
// ouput tentativi compresi numeri ripetuti

