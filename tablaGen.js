const image = new Image();

// A kép forrásának beállítása
image.src = 'pixel-heart.jpg';

// Kép betöltődése után a szélesség lekérése
image.onload = function() {
  const width = this.width;
  console.log('A kép szélessége:', width, 'pixel');
};