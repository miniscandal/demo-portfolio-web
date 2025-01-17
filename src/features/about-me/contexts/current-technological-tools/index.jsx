import { createContext } from 'react';


const Provider = {};

const CurrentTechnologicalToolsContext = createContext(Provider);


function CurrentTechnologicalToolsProvider({ children }) {

    return (
        <CurrentTechnologicalToolsContext.Provider value={Provider}>
            {children}
        </CurrentTechnologicalToolsContext.Provider>
    )
}

export {
    CurrentTechnologicalToolsContext,
    CurrentTechnologicalToolsProvider
};
