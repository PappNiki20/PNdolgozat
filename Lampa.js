class Lampa {
  #allapot;
  #id;
  #divElem;

  constructor(id, allapot, szuloElem) {
    allapot = false;
    this.#id = id;
   
    szuloElem.append(
      `<div id="${this.#id}" style="background-color: yellow; width:100px; height:100px;  border-radius:50%; margin:5px"></div>`
    );
    console.log(szuloElem);
    this.#divElem = szuloElem.children("div:last-child");
    this.#divElem.on("click", () => {
      this.#kattintasTrigger();
      this.setAllapot();
      this.#szinBeallit();
    });
  }
  setAllapot() {
    if (this.#allapot) {
      this.#allapot = false;
    } else {
      this.#allapot = true;
    }
    this.#allapot = this.#szinBeallit();
  }
  #szinBeallit() {
    if (this.#allapot) {
      this.#divElem.css("background-color", "yellow");
    } else {
      this.#divElem.css("background-color", "black");
    }
  }
  #kattintasTrigger() {
    let esemeny = new CostumEvent("kapcsolas", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
}
export default Lampa;
