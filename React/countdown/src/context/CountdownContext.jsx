import React, { useState } from "react";

const CountdownContext = React.createContext(null);

const Countdownprovider = ({ children }) => {
    const [event, setEvent] = useState(null);
    return (
        <CountdownContext.Provider value={{ event, setEvent }}>
            {children}
        </CountdownContext.Provider>
    );
};

export { CountdownContext, Countdownprovider };
