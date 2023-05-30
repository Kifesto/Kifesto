class Szin {
  #id;
  #szin;
  constructor(id, szin, szuloElem) {
    this.#szin = szin;
    this.#id = id;
    this.szuloElem = szuloElem.append(`<div class="szin" id="${this.#id}" style="background-color: ${this.#szin};">&nbsp</div>`);
    this.elem = $(".szin:last-child");
    this.elem.on("click", () => {
      console.log("szín kiválasztva: " + this.#id + " - " + this.#szin)
      this.kattintasTrigger()
    });

  }
  getSzin() {
    this.#szin = this.elem.css("background-color");
    return this.#szin;
     
  }
  kattintasTrigger() {
        const esemeny=new CustomEvent("szinValasztas", {detail:this.#szin})
        window.dispatchEvent(esemeny)
    
      }
};
export default Szin;
