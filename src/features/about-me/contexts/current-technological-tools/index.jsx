import { createContext } from 'react';

import { en as usedTools } from '@shared-resources-data/my-technological-tools/current.json';
import { en as toolsData } from '@shared-resources-data/glossaries/technological-tools.json';


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
