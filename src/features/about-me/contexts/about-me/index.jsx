import { createContext } from 'react';

import { en } from '@shared-resources-data/about-me/about-me.json';


const Provider = en;

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
