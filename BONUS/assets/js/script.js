//variabili del dom
var dom = document;
//variabili pc

var x = 0;
var varState;
var catchEl;
var catchElAr;
var newEl;
var arraySys = [];
var i = 0;
var click = 0;
var z = 1;
var btnLv = catchElemAr('.btn-lvl');
var usrLv = 5;


// variabili user
var reqN;//chiedo il numero col prompt
var n = 0;//contatore per verificare i tenativi
var output; //testo variabile
var controller = false;
var arrUsr = []; // numeri dello user collezionati in un array -- veerificare i doppi con la funzion checkDouble()

/* FUNZIONI */
/* -- DOM -- */
//funzione prende l'element dom
function catchElem(elem) {
    catchEl = dom.querySelector(elem)
    //console.log(catchEl);
    return catchEl
}
function catchElemAr(elem) {
    catchElAr = dom.querySelectorAll(elem)
    //console.log(typeof catchElAr);
    return catchElAr
}
//funzione che crea l'elemento dom dell'html con una classe
function newElem(type, classEl) {
    newEl = dom.createElement(type)
    newEl.className = classEl
    return newEl
}
//funzione che appende un child da un dom
function addElem(elem, type, classEl) {
    catchElem(elem);
    newElem(type, classEl);
    catchEl.appendChild(newEl)
}

/* -- ACTIONS -- */
//funzione che genera nmeri random da 1 a 100
function nRand() {
    return Math.floor(Math.random() * 100 + 1)
}
//funzione che verifica i doppi
function chkDouble(thisArr, num) {
    if (thisArr.indexOf(num) >= 0) {
        return false
    } else {
        return true
    }
}
//funzione che toglie o aggiunge num all'array - specifica
function resultCheck(thisArr, num) {
    var bool = chkDouble(thisArr, num);
    if (bool) {
        thisArr.push(num);
    } else {
        thisArr.push(num);
        thisArr.pop(num);
    }
    return bool
}
//che nasconde numeri random
function offBtn(ele) {
    console.log(usrLv)
    click++;
    var i = 0;
    var x = 0;
    if ((ele.path[0].nodeName) == "A") {
        reqN = parseInt(ele.target.textContent)
    } else {
        reqN = parseInt(ele.target.firstChild.textContent)
    }

    if (arraySys.indexOf(reqN) < 0) {
        if (!(resultCheck(arrUsr, reqN))) {
            alert('immetti un numero diverso');
        } else {
            output = 'ottimo';
            myBtnNum[reqN - 1].firstChild.style.visibility = "hidden"
            var arrayHint = arraySys.slice(0)
            for (i; i < usrLv; i++) {
                var x = nRand()
                if (arrayHint.indexOf(x) < 0) {
                    myBtnNum[x - 1].firstChild.style.visibility = "hidden";
                    arrayHint.push(x)
                } else { i-- }
            }
        }
        /* #endregion */
    } else {
        output = 'fine partita';
        console.log(output)
    }
    console.log("in quanto mosse:" + (click))
}

//creazione della table
for (i = 0; i < 10; i++) {
    addElem("#game .container-fluid", 'div', 'row');
    if ((catchElemAr("#game .row")).length > 0) {
        for (n = 0; n < 10; n++) {
            if (n == 0) {
                newElem('div', 'col-1 offset-1');
            } else {
                newElem('div', 'col-1');
            }
            catchElAr[i].appendChild(newEl);
            var fatherEl = '.row:nth-child(' + (i + 1) + ') .col-1:nth-child(' + (n + 1) + ')'
            addElem(fatherEl, 'div', 'number-box')
            addElem(fatherEl + " .number-box", 'a', 'number')
            catchElem(fatherEl + " .number-box a")
            catchEl.innerText = z
            z++;
        }
    }
}


// ** ESECUZIONE DEL GIOCO **
// ciclo che crea 16 numeri diversi tra loro
while (arraySys.length >= 0 && arraySys.length < 16) {
    num = nRand();
    resultCheck(arraySys, num) //richiamo la funzione che restitusice il risultato dopo il check dei doppi
    i++;
}
console.log(arraySys.sort(function (a, b) { return a - b })) //trovata su internet

btnLv.forEach((ele) => {
    ele.addEventListener('click', function(){
        usrLv = ele.value
        return usrLv
    })
})

var myBtnNum = catchElemAr('.number-box');
//interazione con la pagina
myBtnNum.forEach((ele) => {
    ele.addEventListener('click', offBtn)
})









