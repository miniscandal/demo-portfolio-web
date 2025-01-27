import { createContext } from 'react';

import { en as usedTools } from '@shared-mocks/data/my-technological-tools/current.json';
import { en as toolsData } from '@shared-mocks/data/glossaries/technological-tools.json';


const Provider = {
    usedTools,
    toolsData
};

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
