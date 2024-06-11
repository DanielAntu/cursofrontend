import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Contact from "./routes/Contact.jsx";

// componente base
import Home from "./routes/Home.jsx";

// criando o provider
import { CounterContextProvider } from "./context/CounterContext.jsx";

import { TitleColorContextProvider } from "./context/TitleColorContext.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterContextProvider>
            <TitleColorContextProvider>
                <RouterProvider router={router} />
            </TitleColorContextProvider>
        </CounterContextProvider>
    </React.StrictMode>
);
