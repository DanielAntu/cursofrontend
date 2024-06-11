// adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou aqui");
});

// removendo evento
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
});

// Ações default
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página");
});

// eventos de teclas
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

// eventos de maouse
const mouseEvent = document.querySelector("#mouse");

mouseEvent.addEventListener("mouseup", () => {
    console.log("pressionou o botão");
});

mouseEvent.addEventListener("dblclick", () => {
    console.log("pessionou duas vezes");
});

// movimento do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo x: ${e.x}`);
    // console.log(`No eixo x: ${e.y}`);
});

// evento de scroll
window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > "50px") {
        console.log("Passamos de 200px");
    }
});

// evento de focus
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
});

// evento de carregamento
window.addEventListener("load", () => {
    console.log("Á pagina carregou");
});

// window.addEventListener("beforeunload", (e) => {
//     e.preventDefault();
//     e.returnValue = teste;
// });

// debounce
const debounce = (f, delay) => {
    let timeout;

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    };
};

window.addEventListener(
    "mousemove",
    debounce(() => {
        console.log("Executando a cada 400ms");
    }, 400)
);
