import Szin from "./EgySzin.js";
import { LISTA } from "./szinekLista.js";
import { KEPEKLISTA } from "./kepek.js";
import KepMegjelenit from "./KepMegjelenít.js";
import pixel from "./tablaGen.js";
$(function () {
   //const painter = new Painter('canvas');
    let szuloElem = $(".tarolo")
    let kokckaElem = $(".kockak");
    let kepElem =$(".kepek");
    for (let index = 0; index < LISTA.length; index++) {
        let k1 = new Szin(index, LISTA[index], szuloElem);
        k1.getSzín();
    }
    for (let index = 0; index < 1240; index++) {
        let ko = new pixel(kokckaElem, index);

    }
    for (let index = 0; index < KEPEKLISTA.length; index++) {
        let kep = new KepMegjelenit(kepElem,KEPEKLISTA[index],index,kokckaElem,szuloElem);
    }
    
  /* const image = new Kep();
   image.getWidth();*/
    
});