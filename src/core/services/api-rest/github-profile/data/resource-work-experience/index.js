import { alternatingWordOrder } from '@feat-work-experience-history-utils/alternating-word-order';

import { en as ebookEducational } from '@shared-mocks/data/work-experience/ebook-educational-content-developer.json';
import { en as softwareEngineerBackendFrontend } from '@shared-mocks/data/work-experience/software-engineer-backend-frontend.json';



const experienceEbookEducationalContentDeveloper = {
    ...ebookEducational,
    socialEmotionalCompetencies: alternatingWordOrder(ebookEducational.socialEmotionalCompetencies),
};


const experienceSoftwareEngineerBackendFrontend = {
    ...softwareEngineerBackendFrontend,
    socialEmotionalCompetencies: alternatingWordOrder(softwareEngineerBackendFrontend.socialEmotionalCompetencies),
};

export {
    experienceEbookEducationalContentDeveloper,
    experienceSoftwareEngineerBackendFrontend
};
