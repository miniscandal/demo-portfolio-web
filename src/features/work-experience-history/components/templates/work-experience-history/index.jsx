import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { EmploymentSummary } from '@feat-work-experience-history-organisms/employment-summary';

import './style.css';


function WorkExperienceHistory() {

    return (
        <article className='work-experience-history'>
            <header>
                <DecoratedTitle text='WORK EXPERIENCE' color='charcoal-grey' />
            </header>
            <section>
                <EmploymentSummary />
            </section>
        </article>
    );
}

export { WorkExperienceHistory };
