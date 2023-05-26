import Szin from "./EgySzin.js";
import { LISTA } from "./szinekLista.js";
import Kep from "./KepMegjelenít.js";
import Painter from "./AbsztraktKifesto.js";
import pixel from "./tablaGen.js";
import Szinek from "./szinek.js";
$(function () {
   //const painter = new Painter('canvas');
    let szuloElem = $(".tarolo")
    let kokckaElem = $(".kockak");
    for (let index = 0; index < LISTA.length; index++) {
        let k1 = new Szin(index, LISTA[index], szuloElem);

    }
    for (let index = 0; index < 1240; index++) {
        let ko = new pixel(kokckaElem, index);

    }
    let sz = new Szinek();
    sz.getSzín();
  /* const image = new Kep();
   image.getWidth();*/
    
});