// variáveis
let nome = "Matheus";

console.log(nome);

nome = "Matheus Battisti";
console.log(nome);

const idade = 31;
console.log(idade);
// idade = 13;

// mais sobre variável
// let 2teste = 'invalido'
// let @teste = 'invalido'

let a = 10,
    b = 20,
    c = 30;
console.log(a, b, c);

const nomecompleto = "Matheus Battisti";
const nomeCompleto = "João da Silva";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste);

// prompt
// const age = prompt("Digite a sua idade:");

// console.log(`Você tem ${age} anos.`);

// alert
// alert("Testando");

// const z = 10;
// alert(`O número é ${z}`);

console.log(Math.max(5, 2, 1, 10));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// console
console.log("teste!");
console.error("erro!");
console.warn("aviso");

// if
const m = 10;

if (m > 5) {
    console.log("m é maior que 5");
}

const user = "João";

if (user === "João") {
    console.log("Olá João");
}

if (user === "Maria") {
    console.log("Olá Maria");
}

console.log(user === "João", user === "Maria");

// else
const loggedin = false;

if (loggedin) {
    console.log("Está autenticado!");
} else {
    console.log("Não esta autenticado!");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Números mais alto");
} else {
    console.log("Os numeros são mais altos");
}

// else if
if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!");
}

const userName = "Matheus";
const userAge = 31;

if (userName === "José") {
    console.log("Bem vindo José!");
} else if (userName === "Matheus" && userAge === 31) {
    console.log("Olá Matheus, você tem 31 anos!");
} else {
    console.log("Nenhuma condição verdadeira!");
}

// While
let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito
// let x = 10;

// while (x > 5) {
//     console.log("Imprimindo x");
// }

// do while
let o = 10;

do {
    console.log(`Valor de o: ${o}`);
    o--;
} while (o > 1);

// for
for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo...!");
}

let r = 0;
for (r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo ${r}`);
}

// identação
for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log("maior que 10");
    } else {
        if (u / 2 === 0) {
            console.log("deu 0");
        }
    }
}

// break
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);

    if (g === 12) {
        break;
    }
}

// Continue
for (let s = 0; s < 10; s = s + 1) {
    if (s % 2 == 0) {
        console.log("Número Par");
        continue;
    }
    console.log(s);
}

// switch
const job = "Advogado";

switch (job) {
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Advogado":
        console.log("Você é um advogado!");
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro!");
        break;
    default:
        console.log("Profissão não encontrado");
}
