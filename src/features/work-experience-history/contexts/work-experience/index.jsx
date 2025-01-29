import { createContext } from 'react';

import { alternatingWordOrder } from '@feat-work-experience-history-utils/alternating-word-order';

import { en as technologicalToolsData } from '@shared-mocks/data/glossaries/technological-tools.json';
import { en as technologicalKnowledgeData } from '@shared-mocks/data/glossaries/knowledge-technological-concepts.json';
import { en as socialEmotionalCompetenciesData } from '@shared-mocks/data/glossaries/social-emotional-competencies.json';
import { en } from '@shared-mocks/data/work-experience/work-experience.json';


const { ebookDevelopment } = en;

const { socialEmotionalCompetencies } = ebookDevelopment;

const Provider = {
    experience: {
        ...ebookDevelopment,
        socialEmotionalCompetencies: alternatingWordOrder(socialEmotionalCompetencies),
    },
    dataGlossaries: {
        technologicalToolsData,
        technologicalKnowledgeData,
        socialEmotionalCompetenciesData
    }
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
