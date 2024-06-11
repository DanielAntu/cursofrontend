import React from "react";

const Events = () => {
    const handleClick = (e) => {
        console.log(e);
        console.log("Executou");
    };

    // Função de redenrização
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>;
        } else {
            return <h1>Renderizando outra coisa</h1>;
        }
    };

    // return 10 > 2 && <p>Carregando...</p>;

    return (
        <div>
            <div>
                <button onClick={() => console.log("Testando a aplicação")}>
                    Clique aqui
                </button>
            </div>
            {/* eventos com função */}
            <div>
                <button onClick={handleClick}>Clique aqui</button>
            </div>

            {/* Função com render */}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;
