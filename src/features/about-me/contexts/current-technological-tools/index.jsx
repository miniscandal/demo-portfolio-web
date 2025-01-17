import { createContext } from 'react';

import { en } from '@shared-resources-data/my-technological-tools/current.json';


const Provider = en;

const CurrentTechnologicalToolsContext = createContext(Provider);


function CurrentTechnologicalToolsProvider({ children }) {

    return (
        <CurrentTechnologicalToolsContext.Provider value={Provider}>
            {children}
        </CurrentTechnologicalToolsContext.Provider>
    );
}

export {
    CurrentTechnologicalToolsContext,
    CurrentTechnologicalToolsProvider
};
