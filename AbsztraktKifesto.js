class Square {
    constructor(color) {
      this.color = color;
      this.element = document.createElement('div');
      this.element.classList.add('square');
    }
}

class Painter {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.squares = [];

      this.createGrid();
    }

    createGrid() {
      const numSquares = 19987;
      for (let i = 0; i < numSquares; i++) {
          const square = new Square('white');
          this.canvas.appendChild(square.element);
          this.squares.push(square);
        }
        this.canvas.appendChild(document.createElement('br'));
      }
}


export default Painter;

