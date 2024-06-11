import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

// componente base
import Home from "./routes/Home.jsx";

import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";

// rota dinamica
import Product from "./routes/Product.jsx";

// nested routes
import Info from "./routes/Info.jsx";
import Search from "./routes/Search.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        // componente base
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            // rota dinamica
            {
                path: "products/:id",
                element: <Product />,
            },
            // rota dinamica
            {
                path: "products/:id/info",
                element: <Info />,
            },
            // search
            {
                path: "search",
                element: <Search />,
            },
            // redirect
            {
                path: "teste",
                element: <Navigate to="/" />,
            },
        ],
    },
    // {
    //     path: "contact",
    //     element: <Contact />,
    // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
