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
    setColor(e) {
        const colorPicker = $(e.target);
        if (colorPicker.hasClass('szin')) {
          const color = colorPicker.css('background-color');
          this.negyzetek.forEach(negyzet => {
            negyzet.color = color;
          });
        }
      }
};
export default Szin;