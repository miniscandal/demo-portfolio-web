import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience';

import { CompanyDetails } from '@feat-work-experience-history-molecules/company-details';

import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function JobExperienceDetails() {
    const { experience } = useContext(WorkExperienceContext);
    const { role, employmentDuration, contributions, company } = experience;

    const paragraphs = contributions.map((value, index) => (
        <div key={`${value}-${index}`} className='job-experience-details__div--paragraph'>
            <Paragraph text={value} color='charcoal-grey' />
        </div>
    ));


    return (
        <section className='job-experience-details'>
            <div className='job-experience-details__div'>
                <div className='job-experience-details__div--title'>
                    <Title text={role} color='royal-blue' type='h3' />
                </div>
                <CompanyDetails {...company} employmentDuration={employmentDuration} />
            </div>
            <div className='job-experience-details__div'>
                {paragraphs}
            </div>
        </section>
    );
}

export { JobExperienceDetails };
