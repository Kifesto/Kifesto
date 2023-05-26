class Szin{
    #id;
    #szin;
    constructor(id, szin, szuloElem) {
       this.#szin = szin;
        this.#id = id;
        this.szuloElem = szuloElem.append(`<div class="szin" id="${this.#id}" style="background-color: ${this.#szin};">&nbsp</div>`);
        this.elem = $(".szin:last-child");
        this.elem.on("click", ()=>{
            console.log("szín kiválasztva: "+this.#id+" - "+this.#szin)
        });


    }
      getSzín(id) {
        this.#id = id;
        let background = $(`${id}`).css("background-color");
        console.log(background);
    }
};
export default Szin;