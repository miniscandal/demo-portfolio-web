import { createContext } from 'react';

import { en as usedTools } from '@shared-mocks/data/technological-expertise/current.json';
import { en as toolsData } from '@shared-mocks/data/glossaries/technological-tools.json';
import { en as knowledgeConceptsData } from '@shared-mocks/data/glossaries/knowledge-technological-concepts.json';


const Provider = {
    usedTools,
    knowledgeConceptsData,
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
