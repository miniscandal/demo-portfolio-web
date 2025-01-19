import { WorkExperienceProvider } from '@feat-work-experience-history-contexts/work-experience';

import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { EmploymentSummary } from '@feat-work-experience-history-organisms/employment-summary';

import './style.css';


function WorkExperienceHistory() {
    const decoratedTitle = {
        text: 'WORK EXPERIENCE',
        color: 'charcoal-grey'
    };

    return (
        <article className='work-experience-history'>
            <div className='work-experience-history__div'>
                <DecoratedTitle {...decoratedTitle} />
            </div>
            <section>
                <WorkExperienceProvider>
                    <EmploymentSummary />
                    <EmploymentSummary />
                </WorkExperienceProvider>
            </section>
        </article>
    );
}

export { WorkExperienceHistory };
