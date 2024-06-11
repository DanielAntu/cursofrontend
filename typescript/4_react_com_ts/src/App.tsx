// importação de componentes
import FirstComponent from "./components/FirstComponent";

// Desestruturando props
import SecondComponents from "./components/SecondComponents";
import Destructuring, { Category } from "./components/Destructuring";

// useState
import State from "./components/State";

// type
type textOrNull = string | null;

// context
import { createContext } from "react";

// usando componente
import Context from "./components/Context";

interface IAppContext {
    language: string;
    framework: string;
    projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
    // Variaveis
    const name: string = "Matheus";
    const age: number = 30;
    const isWorking: boolean = true;

    // funções
    const userGreeting = (name: string): string => {
        return `Olá, ${name}!`;
    };

    const myText: textOrNull = "tem algum texto aqui";
    let mySecondText: textOrNull = null;

    // mySecondText = "opa";

    // context
    const contextValue: IAppContext = {
        language: "JavaScript",
        framework: "Express",
        projects: 5,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <div className="App">
                <h1>TypeScript com react</h1>
                <h2>Nome: {name}</h2>
                <p>Idade: {age}</p>
                {isWorking && <p>Está trabalhando</p>}
                <h3>{userGreeting(name)}</h3>
                <FirstComponent />
                <SecondComponents name="Segundo" />
                <Destructuring
                    title="Primeiro post"
                    content="Algum conteúdo"
                    commentsQty={10}
                    tags={["ts", "js"]}
                    category={Category.TS}
                />
                <Destructuring
                    title="Segundo post"
                    content="outro conteúdo"
                    commentsQty={10}
                    tags={["ts", "js"]}
                    category={Category.P}
                />
                <State />
                {myText && <p>Tem texto na variável</p>}
                {mySecondText && <p>Tem texto na variável</p>}
                <Context />
            </div>
        </AppContext.Provider>
    );
}

export default App;
