import { WorkExperienceProvider } from '@feat-work-experience-history-contexts/work-experience';

import { EmploymentSummary } from '@feat-work-experience-history-organisms/employment-summary';

import { UseControlRadioInput } from '@shared-custom-hooks/use-control-radio-input';

import { experienceEbookEducationalContentDeveloper } from '@core-services-api-rest-github-profile/data/resource-work-experience';
import { experienceSoftwareEngineerBackendFrontend } from '@core-services-api-rest-github-profile/data/resource-work-experience';


import './style.css';


function TempLineWorkExperience({
    dataGlossaries
}) {
    const { radioInputComponents } = UseControlRadioInput();


    return (
        <div className='temp-line-work-experience'>
            <div className='temp-line-work-experience__div'>
                {radioInputComponents}
            </div>
            <div className='temp-line-work-experience__div'>
                <WorkExperienceProvider Provider={{
                    experience: experienceEbookEducationalContentDeveloper,
                    dataGlossaries
                }}>
                    <EmploymentSummary />
                </WorkExperienceProvider>
                <WorkExperienceProvider Provider={{
                    experience: experienceSoftwareEngineerBackendFrontend,
                    dataGlossaries
                }}>
                    <EmploymentSummary />
                </WorkExperienceProvider>
                <WorkExperienceProvider Provider={{
                    experience: experienceEbookEducationalContentDeveloper,
                    dataGlossaries
                }}>
                    <EmploymentSummary />
                </WorkExperienceProvider>
            </div>
        </div>
    );
}

export { TempLineWorkExperience };
