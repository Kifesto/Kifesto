class KepMegjelenit {
    #id
    constructor(szuloElem,id,azonosito,kokckaElem,szinElem) {
        this.#id=id;
        this.azonosito=azonosito;
        this.szuloElem = szuloElem.append(`<div class="kep" id="${this.azonosito}"><img src="${this.#id}" alt=kep></div>`);
        this.elem = $(".kep:last-child");
        this.elem.on("click", ()=>{
            this.szuloElem.children(".kep").not(this.elem).hide();
            this.elem.addClass("kivalasztottKep");
            this.elem.removeClass("kep");
            kokckaElem.show();
            szinElem.show(); 
            
        });
        //const kepEleres = $(".image");
        //let txt = kivalasztas;
        //kepEleres.append(txt);
        //this.imgELem = kepEleres.children("img");
    }
    getWidth() {


        // Kép betöltődése után a szélesség lekérése
        this.imgELem.on("load", () => {
            const szeleseg = this.imgELem.width();
            console.log(szeleseg);
            return szeleseg;
        });

    }
    kivalasztas(){

    }

}
export default KepMegjelenit;