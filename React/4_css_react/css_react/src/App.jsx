import "./App.css";

// css de components
import MyComponents from "./components/MyComponents";

// css module
import Title from "./components/Title";

function App() {
    // css inline dinamico
    const n = 15;

    // Classe dinamica
    const redTitle = true;

    return (
        <div className="App">
            {/* css global */}
            <h1>CSS no React</h1>
            {/* css de componentes */}
            <MyComponents />
            <p>Pegou o css do componente</p>
            {/* inline style */}
            <p style={{ color: "blue", padding: "25px" }}>
                Este elemento tem estilo inline
            </p>
            {/* inline style dinamico */}
            <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
                Css dinamico
            </h2>
            <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
                Css dinamico 2
            </h2>
            {/* Classe Dinamica */}
            <h2 className={redTitle ? "red-title" : "title"}>
                Este titulo vai ter uma classe
            </h2>
            {/* css module */}
            <Title />
        </div>
    );
}

export default App;
