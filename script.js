//variabili pc
var x = 0;
var varState;
var arraySys = [];
i=0;

// variabili user
var reqN;//chiedo il numero col prompt
var n =0;//contatore per verificare i tenativi
var output; //testo variabile
var controller = false;
var arrUsr=[]; // numeri dello user collezionati in un array -- veerificare i doppi con la funzion checkDouble()

/* FUNZIONI */

//funzione che genera nmeri random da 1 a 100
function nRand(){
    return Math.floor(Math.random()*100+1)
}
 //funzione che verifica i doppi
function chkDouble(thisArr, num){
    if(thisArr.indexOf(num)>=0){
        return false
    } else { 
        return true 
    }
}
//funzione che toglie o aggiunge num all'array - specifica
function resultCheck(thisArr, num){
    var bool = chkDouble(thisArr, num);
    if(bool){
        thisArr.push(num);
    } else {
        thisArr.push(num); 
        thisArr.pop(num);
    }
    return bool
}

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
while (arraySys.indexOf(reqN) < 0 && controller == false) {
        reqN = parseInt(prompt('inserisci numero da 1 a 100'));
        if(!(resultCheck(arrUsr,reqN))){
            console.log('immetti un numero diverso');
        }
        console.log(arrUsr)
        if(arraySys.indexOf(reqN) >= 0) {
            controller = true;
            output = 'fine partita';
        } else {
            n++;
            output = 'ottimo';
        }
        console.log(output, n+1)
}



