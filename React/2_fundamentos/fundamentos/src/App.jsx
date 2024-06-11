import "./App.css";

// importando componentes
import FirstComponents from "./components/FirstComponent";

// hierarquia
import MyComponents from "./components/MyComponents";

// template expression
import TemplateExpression from "./components/TemplateExpression";

// Eventos
import Events from "./components/Events";

function App() {
    return (
        <>
            {/* Comentario jsx */}
            <FirstComponents />
            <TemplateExpression />
            <MyComponents />
            <Events />
        </>
    );
}

export default App;
