import { WorkExperienceProvider } from '@feat-work-experience-history-contexts/work-experience';

import { WorkExperienceDetails } from '@feat-work-experience-history-organisms/work-experience-details';

import { InterpersonalSkills } from '@feat-work-experience-history-organisms/interpersonal-skills';
import { TechnicalSkills } from '@feat-work-experience-history-organisms/technical-skills';

import { Title } from '@shared-atoms/title';

import './style.css';


function WorkExperienceHistory() {
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
                <WorkExperienceProvider>
                    <WorkExperienceDetails />
                    <TechnicalSkills />
                    <InterpersonalSkills />
                </WorkExperienceProvider>
            </section>
        </article>
    );
}

export { WorkExperienceHistory };
