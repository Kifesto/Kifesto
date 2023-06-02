class TablaGen {
  #id;
  constructor(szuloElem, id) {
    this.#id = id;
    this.szuloElem = szuloElem.append(`<div id="${this.#id}" class="kocka"></div>`);
    this.elem = $(`#${this.#id}:last-child`);
    this.aktszin = "red";
    this.ballLenyomva = false;
    $(document).on("mousedown", () => {
      this.ballLenyomva = true;
    });

    this.elem.on("mousemove", () => {
      if (this.ballLenyomva == true) {
        this.huzasTrigger();
      }
    });

    $(document).on("mouseup", () => {
      this.ballLenyomva = false;
    });


    this.elem.on("click", () => {
    console.log( this.aktszin);
     
      this.kattintasTrigger()
    });
  }
  
  kattintasTrigger() {
    const esemeny=new CustomEvent("szinBeallit", {detail:this})
    window.dispatchEvent(esemeny)
  }
  
  setSzin(szin) {
    this.aktszin = szin;
    this.elem.css("background-color", this.aktszin);
  }
  
  huzasTrigger() {
      const esemeny2 = new CustomEvent("huzasBeallit", { detail: this});
      window.dispatchEvent(esemeny2);
    }

}
export default TablaGen;
