class KepMegjelenit {
  #id;
  constructor(szuloElem, id, azonosito, kokckaElem, szinElem) {
    this.#id = id;
    this.azonosito = azonosito;
    this.szuloElem = szuloElem.append(
      `<div class="kep" id="${this.azonosito}"><img src="${
        this.#id
      }" alt=kep></div>`
    );
    this.elem = $(".kep:last-child");
    this.elem.on("click", () => {
      this.szuloElem.children(".kep").not(this.elem).hide();
      this.elem.addClass("kivalasztottKep");
      this.elem.removeClass("kep");
      kokckaElem.show();
      szinElem.show();
      console.log(this.getWidth(this.elem));
    });
  }

  getWidth(konkKep) {
    const szelesseg = konkKep.width();
    const magassag = konkKep.height();
    const szazalekosSzelesseg =
      (szelesseg / konkKep.parent().width()) * 150;
    const articleElem = $("article");
    articleElem.css("width", szazalekosSzelesseg + "%");
    articleElem.css("height", magassag  + "%");
    const esemeny = new CustomEvent("kepSzelesseg", {
      detail: szelesseg,
    });
    window.dispatchEvent(esemeny);
  }
}

export default KepMegjelenit;
