// number
let x: number = 10;

console.log(x);

x = 16;

console.log(typeof x);

const y: number = 15.5867;

console.log(typeof y);

console.log(y);

console.log(y.toPrecision(3));

// string
const firstName: string = "Matheus";

console.log(firstName.toUpperCase());

let fullname: string;

const lastName: string = "Battisti";

fullname = firstName + " " + lastName;

console.log(fullname);

console.log(typeof fullname);

// boolean
let a: boolean = false;

console.log(a);
console.log(typeof a);

a = true;
console.log(a);

// inference e annotation
const ann: string = "Teste";

let inf = "Teste";

// inf = 1
// ann = 1

console.log("Testando");
