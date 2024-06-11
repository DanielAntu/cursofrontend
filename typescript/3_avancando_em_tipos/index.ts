// arrays
let numbers: number[] = [1, 2, 3];
numbers.push(3);

console.log(numbers[2]);

const nomes: string[] = ["Matheus", "João"];

// outra sintaxe array
const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);

// any
const arr1: any = [1, "teste", true, [], { nome: "Matheus" }];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);

// Tipo de parametro de funções
function soma(a: number, b: number) {
    console.log(a + b);
}

soma(4, 5);
// soma("a", "b");

// retorno tipado
function greeting(name: string): string {
    return `Olá ${name}`;
}

console.log(greeting("Matheus"));
// console.log(greeting(123))

// função anônimas
setTimeout(function () {
    const salary: number = 1000;

    // console.log(parseFloat(salary))

    // console.log(salary);
}, 2000);

// Tipos de objetos
function passCoordinates(coord: { x: number; y: number }) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}

const ObjCoord = { x: 329, y: 84.2 };

passCoordinates(ObjCoord);

const pessoaObj: { nome: string; surname: string } = {
    nome: "Matheus",
    surname: "Battisti",
};

// parâmetro opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: ", +a);
    console.log("B: ", +b);
    if (c) {
        console.log("C: ", +c);
    }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// Validação de props opcionais
function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }

    return `Olá, ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Matheus", "Battisti"));
console.log(advancedGreeting("Joaquim"));

// Union types
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance("500");

const arr2: Array<number | string | boolean> = [1, "teste", true];

// avançando em union types
function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuario não foi aprovado!";
    }

    return `A função do usuário é ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// type alias
type ID = string | number;

function showId(id: ID) {
    console.log(`O ID é: ${id}`);
}

showId(1);
showId("200");

// interfaces
interface Point {
    x: number;
    y: number;
    z: number;
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20,
};

showCoords(coordObj);

// interface x type alias
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const somePerson: Person = { name: "Matheus", age: 30 };

console.log(somePerson);

type personType = {
    name: string;
};

// type personType = {
//     age: number
// }

// Literal types
let test: "testando";

test = "testando";

console.log(test);

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`);
}

showDirection("left");

// Non-null assertion operators
const p = document.getElementById("some-p");
console.log(p!.innerText);

// BigInt
let n: bigint;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);

// symbol
let symbolA: symbol = Symbol("a");
let symbolB = Symbol("b");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
