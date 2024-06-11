import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contato</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default App;
