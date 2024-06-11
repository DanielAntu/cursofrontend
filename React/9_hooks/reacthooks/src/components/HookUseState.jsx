import { useState } from "react";

const HookUseState = () => {
    let username = "João";
    // usestate
    const [name, setName] = useState("Matheus");

    const changeNames = () => {
        username = "João da Silva";
        setName("Matheus Battisti");
    };

    // usestate e input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    };

    return (
        <div>
            {/* useState */}
            <h2>useState</h2>
            <p>variável: {username}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
            {/* useState e inputs */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} anos</p>
            <hr />
        </div>
    );
};

export default HookUseState;
