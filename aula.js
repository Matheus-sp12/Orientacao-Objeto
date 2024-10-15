function Carro(modelo, fabricante, ano, cor, combustivel) {
    this.modelo = modelo;
    this.fabriucante = fabricante;
    this.ano = ano;
    this.cor = cor;
    this.combustivel = combustivel;
}

const carro2 = new Carro("uno", "fabricante", 2020, "preto", "gasolina");
const carro3 = new Carro("c3", "Citroem", 2024, "Branco", "etanol");

console.log(carro2 instanceof Carro);
