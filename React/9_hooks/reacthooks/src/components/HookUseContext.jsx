import { createContext } from "react";

export const SomeContext = createContext();

const HookUseContext = ({ children }) => {
    const contextValue = "testing context";
    return (
        <SomeContext.Provider value={{ contextValue }}>
            {children}
        </SomeContext.Provider>
    );
};

export default HookUseContext;
