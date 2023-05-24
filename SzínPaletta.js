import Szin from "./EgySzin.js";
import { LISTA } from "./szinekLista.js";
import Kep from "./KepMegjelenít.js";
import Painter from "./AbsztraktKifesto.js";

$(function () {
    const painter = new Painter('canvas');
    let szuloElem = $(".tarolo")

    for (let index = 0; index < LISTA.length; index++) {
        let k1 = new Szin(index, LISTA[index], szuloElem);

    }
   const image = new Kep();
   image.getWidth();
    
});