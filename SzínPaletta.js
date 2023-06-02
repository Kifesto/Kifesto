import Szin from "./EgySzin.js";
import { LISTA } from "./szinekLista.js";
import { KEPEKLISTA } from "./kepek.js";
import KepMegjelenit from "./KepMegjelenít.js";
import Pixel from "./tablaGen.js";
$(function () {
  //const painter = new Painter('canvas');
  let szuloElem = $(".tarolo");
  let kokckaElem = $(".kockak");
  let kepElem = $(".kepek");
  let aktSzin = "red";
  let kepWidth = 0;
  for (let index = 0; index < LISTA.length; index++) {
    new Szin(index, LISTA[index], szuloElem);
  }
  /* $(window).on("kepSzelesseg", (event) => {
     kepWidth = event.detail;
     console.log(kepWidth);
     
   });*/

  for (let index = 0; index < 1024; index++) {
    new Pixel(kokckaElem, index);
  }
  $(window).on("huzasBeallit", (event) => {
    let aktElem = event.detail;
    console.log(aktElem);
    aktElem.setSzin(aktSzin);

  });
  $(window).on("szinBeallit", (event) => {
    let aktElem = event.detail;
    console.log(aktSzin);
    aktElem.setSzin(this.aktSzin);
  });

  $(window).on("szinValasztas", (event) => {
    aktSzin = event.detail;
    console.log(aktSzin);
  });
  for (let index = 0; index < KEPEKLISTA.length; index++) {
    let kep = new KepMegjelenit(
      kepElem,
      KEPEKLISTA[index],
      index,
      kokckaElem,
      szuloElem
    );
  }

  /* const image = new Kep();
   image.getWidth();*/
});
