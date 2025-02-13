import { createContext } from 'react';

import { technologicalToolsData } from '@core-services-api-rest-github-profile/data/resource-data-glossaries';
import { technologicalKnowledgeData } from '@core-services-api-rest-github-profile/data/resource-data-glossaries';
import { socialEmotionalCompetenciesData } from '@core-services-api-rest-github-profile/data/resource-data-glossaries';

import { experienceEbookEducationalContentDeveloper } from '@core-services-api-rest-github-profile/data/resource-work-experience';
import { experienceSoftwareEngineerBackendFrontend } from '@core-services-api-rest-github-profile/data/resource-work-experience';


const dataGlossaries = {
    technologicalToolsData,
    technologicalKnowledgeData,
    socialEmotionalCompetenciesData
};

const Provider = {
    dataGlossaries: dataGlossaries,
    experienceSummaries: [
        experienceEbookEducationalContentDeveloper,
        experienceEbookEducationalContentDeveloper,
        experienceSoftwareEngineerBackendFrontend
    ]
};

const WorkExperienceTimelineContext = createContext(Provider);


function WorkExperienceTimelineProvider({ children }) {

    return (
        <WorkExperienceTimelineContext.Provider value={Provider}>
            {children}
        </WorkExperienceTimelineContext.Provider>
    );
}

export {
    WorkExperienceTimelineContext,
    WorkExperienceTimelineProvider
}
