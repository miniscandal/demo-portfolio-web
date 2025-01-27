import { createContext } from 'react';

import { alternatingWordOrder } from '@feat-work-experience-history-utils/alternating-word-order';

import { en } from '@shared-mocks/data/work-experience/work-experience.json';

const { ebookDevelopment } = en;

const { socialEmotionalCompetencies } = ebookDevelopment;

const Provider = {
    ...ebookDevelopment,
    socialEmotionalCompetencies: alternatingWordOrder(socialEmotionalCompetencies)
};

const WorkExperienceContext = createContext(Provider);


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
