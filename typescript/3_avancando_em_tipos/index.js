"use strict";
// arrays
let numbers = [1, 2, 3];
numbers.push(3);
console.log(numbers[2]);
const nomes = ["Matheus", "João"];
// outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// any
const arr1 = [1, "teste", true, [], { nome: "Matheus" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// Tipo de parametro de funções
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a", "b");
// retorno tipado
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Matheus"));
// console.log(greeting(123))
// função anônimas
setTimeout(function () {
    const salary = 1000;
    // console.log(parseFloat(salary))
    // console.log(salary);
}, 2000);
// Tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const ObjCoord = { x: 329, y: 84.2 };
passCoordinates(ObjCoord);
const pessoaObj = {
    nome: "Matheus",
    surname: "Battisti",
};
// parâmetro opcionais
function showNumbers(a, b, c) {
    console.log("A: ", +a);
    console.log("B: ", +b);
    if (c) {
        console.log("C: ", +c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// Validação de props opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Matheus", "Battisti"));
console.log(advancedGreeting("Joaquim"));
// Union types
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
const arr2 = [1, "teste", true];
// avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não foi aprovado!";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoords(coordObj);
const somePerson = { name: "Matheus", age: 30 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// Literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
// Non-null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// BigInt
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
// symbol
let symbolA = Symbol("a");
let symbolB = Symbol("b");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
