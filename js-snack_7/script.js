var nameList = ['pippo', 'allberto', 'giovanni','luca', 'andrea','stefano','roberto','carlo','matteo'];
var snList = ['rossi', 'macchi', 'bianchi','alighieri', 'milani','porta',"zanoni","verde"];
var iN;
var iSn;
var fullname;
var fullList = [];

function vRand (max){
    max = max.length;
    var n = Math.floor(Math.random() * max)
    return n
}

for(var i = 0; i < 5 ; i++){
    iN = vRand(nameList);
    iSn = vRand(snList);
    fullName = nameList[iN] + " " + snList[iSn];
    fullList.push(fullName)
    console.log(fullList)
}

