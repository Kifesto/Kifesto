import Szin from "./EgySzin.js";
import { LISTA } from "./szinekLista.js";
import kep from "./KepMegjelenít.js";
$(function () {
    let szuloElem = $(".tarolo")

    for (let index = 0; index < LISTA.length; index++) {
        let k1 = new Szin(index, LISTA[index], szuloElem);

    }
   const image = new kep()
    image.getWidth(image);
});