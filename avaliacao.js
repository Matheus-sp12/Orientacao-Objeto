function Animais(nome) {
    this.nome = nome;

    this.dizNome = function() {
        console.log(this.nome + " o sexo é")
    }
}


function Cachorro(nome, sexo, raca) {
    this.sexo = sexo;
    this.raca = raca;

    Animais.call(this, nome)
}

function Gato(nome, sexo, raca) {
    this.sexo = sexo;
    this.raca = raca;

    Animais.call(this, nome)
}


const animal1 = new Animais("Preto");
const animal2 = new Animais("Balerion");
const animal3 = new Animais("Zézin");

const cachorro1 = new Cachorro("Windows", "Macho", "PitBull");
const cachorro2 = new Cachorro("Chico", "Macho", "BullDog");
const cachorro3 = new Cachorro("Mell", "Femêa", "Pastor Alemão"); 

const gato1 = new Gato("Frajola", "Macho", "Azul russo");
const gato2 = new Gato("Mia", "Femêa", "Chartreux");
const gato3 = new Gato("Princesa", "Femêa", "Munchkin");

console.log(animal1, animal2, animal3);
console.log(cachorro1, cachorro2, cachorro3);
console.log(gato1, gato2, gato3);

