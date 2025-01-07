import { createContext } from 'react';

import { alternatingWordOrder } from '@feat-work-experience-history-helpers/alternating-word-order';

import { en } from '@shared-resources-data/work-experience/work-experience.json';

const { ebookDevelopment } = en;

const { socialEmotionalCompetencies, ...skills } = ebookDevelopment

const Provider = {
    ...skills,
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
