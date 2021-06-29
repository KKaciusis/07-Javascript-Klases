"use strict"

class Namas {
    constructor(miestas, statybosData, adresas, laiptioniuS, butuS) {
        this.miestas = miestas;
        this.statybosData = statybosData;
        this.adresas = adresas;
        this.laiptioniuS = laiptioniuS;
        this.butuS = butuS;
    }
    info = () => {
        return 'Namo miestas: ' + this.miestas + ',   Namo statybos data: ' + this.statybosData + ', laiptiniu sk: ' + this.laiptioniuS.length + ',   Butu skaicius: ' + this.butuS.length;
    }
    static info2 = (x) => {
        let result = 0;

        x.butuS.forEach(element => {
            result += element;
        });
        return result;
    }
}
class Butas {
    constructor(numeris, kambariuS, gyventojuS){
        this.numeris = numeris;
        this.kambariuS = kambariuS;
        this.gyventojuS = gyventojuS;
    }
    info3 = () =>{
        return 'Buto numeris: ' + this.numeris + '   ' + this.kambariuS + '   Gryventoju skaicius: ' + this.gyventojuS;
    }
}
function randomButuS (min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min)
}
let namai = [];
let butuS = [];
for (let i = 0; i < 5; i++){
    namai.push(
        new Namas(
            "Shit-a-lot " + (i + 1),
            new Date(),
            'adresas 15',
            [2, 4, 5],
            butuS
        )
    ); 
}
for (let j = 0; j < 3; j ++){
    butuS.push(randomButuS(1, 222))
}
let butai = [];
butai.push(new Butas(789, "Dvidesim du kambariai.", 45));

console.log(namai);
console.log(namai[4].info());
console.log(Namas.info2(namai[2]));
console.log(butai)
console.log((butai[0].info3()));
