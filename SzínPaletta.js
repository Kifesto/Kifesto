import Szin from "./EgySzin.js";
import { LISTA } from "./szinekLista.js";
import Kep from "./KepMegjelenít.js";
import pixel from "./tablaGen.js";
$(function () {
   //const painter = new Painter('canvas');
    let szuloElem = $(".tarolo")
    let kokckaElem = $(".kockak");
    for (let index = 0; index < LISTA.length; index++) {
        let k1 = new Szin(index, LISTA[index], szuloElem);
        k1.getSzín();
    }
    for (let index = 0; index < 1240; index++) {
        let ko = new pixel(kokckaElem, index);

    }
    
  /* const image = new Kep();
   image.getWidth();*/
    
});