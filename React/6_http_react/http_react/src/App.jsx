import { useState } from "react";

// http://localhost:3000/products
const url = "http://localhost:3000/products";

import "./App.css";

import { useFetch } from "./hooks/useFetch";

function App() {
    const [products, setProducts] = useState([]);

    // 4 custom hooks
    const { data: items, httpConfig, loading, error } = useFetch(url);

    // useEffect(() => {
    //     async function getData() {
    //         const res = await fetch(url);

    //         const data = await res.json();

    //         setProducts(data);
    //     }

    //     getData();
    // }, []);

    // 2 - envio de dados
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name,
            price,
        };

        // refatorando post
        httpConfig(product, "POST");

        // const res = await fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(product),
        // });

        // // Carregamento dinamico
        // const addedProduct = await res.json();

        // setProducts((prevProducts) => [...prevProducts, addedProduct]);
    };

    return (
        <div className="App">
            <h1>Http react</h1>
            {loading && <p>Carregando...</p>}
            {/* tratando erros */}
            {error && <p>{error}</p>}
            {/* resgates de dados */}
            <ul>
                {items &&
                    items.map((product) => (
                        <li key={product.id}>
                            {product.name} - R${product.price}
                        </li>
                    ))}
            </ul>

            {/* Enviando dados */}
            <div className="add-products">
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Nome:</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Preço:</span>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </label>
                    {/* <input type="submit" value="Enviar" /> */}
                    {loading && (
                        <input type="submit" disabled value="Aguarde..." />
                    )}
                    {!loading && <input type="submit" value="Enviar" />}
                </form>
            </div>
        </div>
    );
}

export default App;
