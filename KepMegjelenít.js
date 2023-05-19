class kep{
    getWidth(image){
        // A kép forrásának beállítása
        image.src = 'pixel-heart.jpg';
    
        // Kép betöltődése után a szélesség lekérése
        image.onload = function () {
            const width = this.width;
            return console.log('A kép szélessége:', width*0.8, 'pixel');
        };
    }
   
}
export default kep;