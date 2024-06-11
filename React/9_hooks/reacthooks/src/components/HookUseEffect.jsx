import { useEffect, useState } from "react";

const HookUseEffect = () => {
    // useEffect sem array de depedencia
    useEffect(() => {
        console.log("Estou sendo executado");
    });

    const [number, setNumber] = useState(0);

    const changeSomething = () => {
        setNumber(number + 1);
    };

    // array de depedencia vazio
    useEffect(() => {
        console.log("Serei executado apenas uma vez");
    }, []);

    // array de depedencia com valores
    const [anotherNumber, setAnotherNumber] = useState(1);

    useEffect(() => {
        if (anotherNumber > 0) {
            console.log("Sou executado apenas quando muda o antherNumber ");
        }
    }, [anotherNumber]);

    // cleanup do useEffect
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log("Hello World");
    //         setAnotherNumber(anotherNumber + 1);
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // }, [anotherNumber]);

    return (
        <div>
            <h2>useEffect</h2>
            <p>number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
                Mudar o another
            </button>
        </div>
    );
};

export default HookUseEffect;
