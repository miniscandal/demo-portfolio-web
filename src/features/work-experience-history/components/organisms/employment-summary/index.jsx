import { JobExperienceDetails } from '@feat-work-experience-history-organisms/job-experience-details';
import { RelevantSkillsExperience } from '@feat-work-experience-history-organisms/relevant-skills-experience';

import './style.css';


function EmploymentSummary() {

    return (
        <section className='employment-summary'>
            <div>
                <JobExperienceDetails />
            </div>
            <RelevantSkillsExperience />
        </section>
    );
}

export { EmploymentSummary };
