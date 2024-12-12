import { createContext } from 'react';

import { en } from '@shared-resources-data/work-experience/work-experience.json';

const { ebookDevelopment } = en;

const WorkExperienceContext = createContext(null);

const Provider = ebookDevelopment;


function WorkExperienceProvider({ children }) {

    return (
        <WorkExperienceContext.Provider value={Provider}>
            {children}
        </WorkExperienceContext.Provider>
    );
}

export {
    WorkExperienceContext,
    WorkExperienceProvider
};
