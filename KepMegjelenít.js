class Kep {
    constructor(image) {
        const kepEleres = $(".image");
        let txt = `<img src="pixel-heart.jpg" alt="kep">`;
        kepEleres.append(txt);
        this.imgELem = kepEleres.children("img");
    }
    getWidth() {



        // Kép betöltődése után a szélesség lekérése
        this.imgELem.on("load", () => {
            const szeleseg = this.imgELem.width();
            console.log(szeleseg);
            return szeleseg;
        });

    }

}
export default Kep;