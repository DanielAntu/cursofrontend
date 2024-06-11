// Arrays
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);
const itens = ["Matheus", true, 2, 4.12, []];
console.log(itens);

const arr = ["a", "b", "c", "d", "e"];
console.log(arr[0]);
console.log(arr[2]);

// propriedades
const numbers = [5, 3, 4];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus";
console.log(myName.length);

// Métodos
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const text = "Algum texto";
console.log(text.toUpperCase());
console.log(text.indexOf("g"));

// Objetos
const person = {
    name: "Matheus",
    age: 31,
    job: "Programador",
};

console.log(person);
console.log(person.name);
console.log(person.name.length);

// Removendo e criando
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000,
};

console.log(car);
car.doors = 4;
console.log(car);
delete car.km;
console.log(car);

// Mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

// conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));

// Mutação
const a = {
    nome: "Matheus",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;
console.log(a);
console.log(b);

// loop em array
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`);
}

// push e pop
const array = ["a", "b", "c"];
array.push("d");
console.log(array);
console.log(array.length);
array.pop();
console.log(array);
const itemRemovido = array.pop();
console.log(itemRemovido);
console.log(array);
array.push("z", "x", "y");
console.log(array);

// shift e unshift
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r");
letters.unshift("z");

console.log(letters);

// indexof e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pera", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));
console.log(myElements[myElements.indexOf("Abacate")]);
console.log(myElements.lastIndexOf("Abacate"));

// Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];
const subArray = testeSlice.slice(2, 4);
console.log(testeSlice);
console.log(subArray);
const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

// foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    { title: "Primeiro Post", category: "PHP" },
    { title: "Segundo Post", category: "JavaScript" },
    { title: "Terceiro Post", category: "Python" },
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// includes
const brands = ["BMW", "VW", "Fiat"];
console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
}

// reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// trim
const trimTest = " testando \n ";

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// padStart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

// Split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// join
const fraseDenovo = arrayDaFrase.join(" ");
console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;
console.log(fraseDeCompra);

// repeat
const palavra = "Testando ";
console.log(palavra.repeat(5));

// rest operator / Rest Parameters
const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
};

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(12, 23, 1289, 89, 90, 56));

// for...of
const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }

    return total;
};

console.log(somaInfinita2(1, 2, 4));
console.log(somaInfinita2(5, 6, 1, 23, 5, 6, 3, 5));

// Destructuring em objetos
const userDetails = {
    firstName: "Matheus",
    lastName: "Battisti",
    job: "Programador",
};

const { firstName, lastName, job } = userDetails;
console.log(firstName, lastName, job);

// renomear variaveis
const { firstName: primeiroNome } = userDetails;
console.log(primeiroNome);

// Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"];
const [veiculaA, veiculoB, veiculoC] = myList;
console.log(veiculaA, veiculoB, veiculoC);

// JSON
const myJson =
    '{"name": "Matheus", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

console.log(myJson);
console.log(typeof myJson);

// Json para objeto e objeto para Json
const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

// json invalido
const badJson = '{"name": Matheus, "age": 31}';
// const myBadObject = JSON.parse(badJson);

// console.log(myBadObject);

myObject.isOpenToWork = true;
console.log(myObject);

const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);
console.log(typeof myNewJson);
