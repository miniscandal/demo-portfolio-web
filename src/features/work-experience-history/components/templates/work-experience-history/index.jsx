import { WorkExperienceProvider } from '@feat-work-experience-history-contexts/work-experience';
import { EmploymentSummary } from '@feat-work-experience-history-organisms/employment-summary';

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
            <div className='work-experience-history__div'>
                <Title {...title} />
            </div>
            <section>
                <WorkExperienceProvider>
                    <EmploymentSummary />
                </WorkExperienceProvider>
            </section>
        </article>
    );
}

export { WorkExperienceHistory };
