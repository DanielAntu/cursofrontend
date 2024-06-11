// Métodos
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au");
    },
};

console.log(animal.nome);
animal.latir();

// aprofundando metodos
pessoas = {
    nome: "Matheus",
    getNome: function () {
        return this.nome;
    },
    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoas.nome);
console.log(pessoas.getNome());
pessoas.setNome("Joaquim");
console.log(pessoas.getNome());

// prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(Object.getPrototypeOf(arr));

// mais sobre prototype
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);
console.log(mySecondObject.a);

// classes basicas
const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemão = Object.create(cachorro);

pastorAlemão.raca = "Pastor Alemão";

console.log(pastorAlemão);
console.log(pastorAlemão.patas);

const buldog = Object.create(cachorro);
buldog.raca = "Bulldog";
console.log(buldog);

// função como classe
function CriarCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = CriarCachorro("Bob", "Vira Lata");

console.log(bob);

const jack = CriarCachorro("Jack", "Poodle");
console.log(jack);

console.log(Object.getPrototypeOf(jack));

// funções como classe
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Uzzy", "Husky");
console.log(husky);

// metodos na funçao construtora
Cachorro.prototype.uivar = function () {
    console.log("Auuuu");
};

husky.uivar();

// Classes es6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("jeff", "Labrador");
console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// mais sobre classe
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(
            `Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`
        );
    }
}

const scania = new Caminhao(6, "Vermelha");
console.log(scania);
scania.descreverCaminhao();

// override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const matheus = new Humano("Matheus", 31);
console.log(matheus);

Humano.prototype.idade = "Não definida";

console.log(matheus.nome);
console.log(Humano.prototype.idade);

// symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
Aviao.prototype[asas] = 2;

const boeing = new Aviao("Boeing", 10);
console.log(boeing);

console.log(boeing[asas]);

// getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você esta lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js";

console.log(myPost);

// Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");
console.log(shark);

// Operador instanceof
console.log(shark instanceof Lobo);
