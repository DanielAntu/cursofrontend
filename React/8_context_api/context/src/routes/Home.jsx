// alterando valor
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
    // const { counter } = useContext(CounterContext);

    const { counter } = useCounterContext();

    const { color, dispatch } = useTitleColorContext();

    const setTitleColor = (color) => {
        dispatch({ type: color });
    };

    return (
        <div>
            <h1 style={{ color: color }}>Home</h1>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter />

            {/* Alterando contexto complexo */}
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>
        </div>
    );
};

export default Home;
