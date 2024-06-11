// movendo pelo dom
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1]);

// Selecionando por tag
const listItem = document.getElementsByTagName("li");
console.log(listItem);

// Selecionando por id
const title = document.getElementById("title");
console.log(title);

// Selecionando por classe
const product = document.getElementsByClassName("product");
console.log(product);

// Selecionando os elementos por css
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// insertBefore
const p = document.createElement("p");
console.log(p);

const header = title.parentElement;

header.insertBefore(p, title);

// appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// replaceChild
const h2 = document.createElement("h2");
h2.textContent = "Meu novo título!";

header.replaceChild(h2, title);

// createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um título");
console.log(myText);

const h3 = document.createElement("h3");
h3.appendChild(myText);
console.log(h3);
mainContainer.appendChild(h3);

// trabalhando com atributos
const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// altura e largura dos elementos
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// posição do elemento
const product1 = product[0];

console.log(product1.getBoundingClientRect());

// CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// alterando estilos de varios elementos
for (const li of listItem) {
    li.style.backgroundColor = "red";
}
