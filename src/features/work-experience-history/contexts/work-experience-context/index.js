import { createContext } from 'react';

import { en } from '@shared-resources-data/work-experience/experiences.json';

const { ebookDevelopment } = en;

const WorkExperienceContext = createContext(null);

const ProviderExperienceEbookDevelopment = ebookDevelopment;


export {
    WorkExperienceContext,
    ProviderExperienceEbookDevelopment
};
