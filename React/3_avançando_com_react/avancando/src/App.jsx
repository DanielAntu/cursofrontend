import "./App.css";

// imagens assets
import night from "./assets/night.jpg";
import ConditionalRender from "./components/ConditionalRender";
import Data from "./components/Data";
import ListRender from "./components/ListRender";

// props
import ShowUserName from "./components/ShowUserName";

// desestruturando props
import CarDetails from "./components/CarDetails";

// Fragements
import Fragment from "./components/Fragment";

// Children
import Container from "./components/Container";

// funçao em prop
import ExecuteFunction from "./components/ExecuteFunction";

// redenrização de listas com componentes
const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

// state lift
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

// useState
import { useState } from "react";

function App() {
    // Função em prop
    function showMessage() {
        console.log("Evento do componente pai");
    }

    // 15 - state lift
    const [message, setMessage] = useState("");

    const handleMessage = (message) => {
        setMessage(message);
    };

    return (
        <div className="app" style={{ paddingBottom: "500px" }}>
            <h1>Avançando em react</h1>
            {/* image public */}
            <img src="/img.jpg" alt="Alguma imagem" />
            {/* image assets */}
            <img src={night} alt="Outra Imagem" />
            <Data />
            <ListRender />
            <ConditionalRender />
            {/* props */}
            <ShowUserName name="Daniel" />
            <CarDetails brand="Vw" km={999} color="Vermelho" />
            {/* Reaproveitamento */}
            <CarDetails brand="Fiat" km={12344} color="Branco" />
            <CarDetails brand="audi" km={99987} color="Azul" />
            {/* Renderização de lista */}
            {cars.map((car) => (
                <CarDetails
                    key={car.id}
                    brand={car.brand}
                    color={car.color}
                    km={car.km}
                />
            ))}
            {/* Fragements */}
            <Fragment />
            {/* children */}
            <Container>
                <p>Alguma coisa</p>
            </Container>
            <Container>
                <div>
                    <h2>Teste</h2>
                    <p>Meu Componente</p>
                </div>
            </Container>
            {/* Função em prop */}
            <ExecuteFunction myFunction={showMessage} />
            <Message msg={message} />
            <ChangeMessage handleMessage={handleMessage} />
        </div>
    );
}

export default App;
