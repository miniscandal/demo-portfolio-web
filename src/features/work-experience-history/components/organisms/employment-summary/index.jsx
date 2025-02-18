import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience';

import { RelevantSkillsExperience } from '@feat-work-experience-history-organisms/relevant-skills-experience';
import { CompanyDetails } from '@feat-work-experience-history-molecules/company-details';

import { Paragraph } from '@shared-atoms/paragraph';
import { Title } from '@shared-atoms/title';

import './style.css';


function EmploymentSummary() {
    const { experience } = useContext(WorkExperienceContext);
    const { role, employmentDuration, contributions, company } = experience;

    const paragraphs = contributions.map((value, index) => (
        <div key={`${value}-${index}`} className='job-experience-details__div--paragraph'>
            <Paragraph text={value} color='charcoal-grey' />
        </div>
    ));

    return (
        <article className='employment-summary'>
            <div className='employment-summary__information'>
                <Title text={role} type='h3' />
                <CompanyDetails {...company} employmentDuration={employmentDuration} />
                <div className='employment-summary__paragraphs'>
                    {paragraphs}
                </div>
            </div>
            <RelevantSkillsExperience />
        </article>
    );
}

export { EmploymentSummary };
