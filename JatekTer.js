import Lampa from "./Lampa.js";
class JatekTer {
  #db;
  #allapotLista = [];
  #meret;
  #lepes;
  constructor() {
    
   /* this.#db = db;*/
    this.#meret = 3;
    this.#lepes = 0;
    this.#allapotLista = this.#allapotLista;
    this.#init();
  }
  #setallapotLista() {
    this.#allapotLista = [meret * meret];
    for (let index = 0; index < this.#allapotLista.length; index++) {
      this.#allapotLista[index] = Boolean(Math.round(Math.random()));
    }
  }
  #szomszedokKeresese(id) {}

  #init() {
    this.#meret = 3;
    this.#allapotLista = [this.#meret*this.#meret];
    const szuloElem = $("article");
    szuloElem.empty();
   
    for (let index = 0; index < 9; index++) {
      const lampa = new Lampa(index, this.#setallapotLista[index], szuloElem);
    }
    $(window).on("kapcsolas",event =>{
      this.#lepes += 1

    });
    console.log(this.#lepes)
  }
  #ellenorzes() {}
}
export default JatekTer;
