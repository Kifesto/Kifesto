/*const image = new Image();

// A kép forrásának beállítása
image.src = 'pixel-heart.jpg';

// Kép betöltődése után a szélesség lekérése
image.onload = function() {
  const width = this.width;
  console.log('A kép szélessége:', width, 'pixel');
};*/

class pixel {
  #id;
  
  constructor(szuloElem, id) {
    this.#id = id;
    this.szuloElem = szuloElem.append(`<div id="${this.#id}" class="kocka"></div>`);
    this.elem = $(`#${this.#id}`);
    this.kattintasTrigger();
    //this.huzasTrigger();
  }
  
  kattintasTrigger() {
    let self = this;
    let id = this.#id;
    let color = self.elem.css("black");
    this.elem.on("click", function () {
      self.elem.css("background-color", "red");
      self.színBeallit(color);
    });
  }
  
  huzasTrigger() {
    let self = this;
    this.elem.on("mousemove", function () {
        self.elem.css("background-color", "red");
    });
  }
  színBeallit(color) {
    $(`#${this.#id}`).css("background-color", color);
  }
}
export default pixel;