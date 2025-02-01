import { createContext } from 'react';

import { en } from '@shared-mocks/data/self-description-life-career/self-description-life-career.json';


const Provider = {
    selfDescriptions: en.selfDescriptions
};

const AboutMeContext = createContext(Provider);


function AboutMeProvider({ children }) {

    return (
        <AboutMeContext.Provider value={Provider}>
            {children}
        </AboutMeContext.Provider>
    );
}

export {
    AboutMeContext,
    AboutMeProvider
};
