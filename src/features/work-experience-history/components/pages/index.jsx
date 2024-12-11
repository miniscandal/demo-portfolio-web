import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience-context';
import { ProviderExperienceEbookDevelopment } from '@feat-work-experience-history-contexts/work-experience-context';

import { WorkExperience } from '@feat-work-experience-history-organisms/work-experience';

import { Title } from '@shared-atoms/title';


import './style.css';


function WorkExperienceHistory() {
    const provider = {
        workExperienceData: ProviderExperienceEbookDevelopment
    };
    const title = {
        text: 'WORK EXPERIENCE',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };


    return (
        <article className='work-experience-history'>
            <Title {...title} />
            <section>
                <WorkExperienceContext.Provider value={provider}>
                    <WorkExperience />
                </WorkExperienceContext.Provider>
            </section>
        </article>
    );
}

export { WorkExperienceHistory };
