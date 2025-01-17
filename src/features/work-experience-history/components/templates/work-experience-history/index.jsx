import { WorkExperienceProvider } from '@feat-work-experience-history-contexts/work-experience';

import { Header } from '@feat-work-experience-history-organisms/header';
import { EmploymentSummary } from '@feat-work-experience-history-organisms/employment-summary';

import './style.css';


function WorkExperienceHistory() {

    return (
        <article className='work-experience-history'>
            <div className='work-experience-history__div'>
                <Header />
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
