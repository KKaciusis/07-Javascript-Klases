"use strict"

class Namas {
    constructor(miestas, statybosData, adresas, laiptioniuS, butuS) {
        this.miestas = miestas;
        this.statybosData = statybosData;
        this.adresas = adresas;
        this.laiptioniuS = laiptioniuS;
        this.butuS = butuS;
    }

}
let namai = [];

for (let i = 0; i < 5; i++){
    let miestas = "Shit-a-lot " + (i + 1);
    namai.push (new Namas(miestas)) 
}
console.log(namai);