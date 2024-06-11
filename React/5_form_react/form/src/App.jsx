import "./App.css";
import MyForm from "./components/MyForm";

function App() {
    return (
        <div className="App">
            <h1>Form em react</h1>
            <MyForm username="Daniel" useremail="email@email.com" />
        </div>
    );
}

export default App;
