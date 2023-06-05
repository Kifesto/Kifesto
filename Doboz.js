class Doboz{
    constructor(ertek)
    {   
        let txt = `<h4>A kiválasztott szín:</h4><p>${ertek}<span class="kszin">&nbsp</span></p>`;
        this.elem = $(".doboz");
        this.elem.empty();
        this.elem.append(txt);
        this.elem.css("border", "1px solid black")
        this.kszin = $(".kszin");
        this.kszin.css("background-color", ertek)
    }

}
export default Doboz