import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience';

import { Title } from '@shared-atoms/title';
import { WorkDateRange } from '@shared-molecules/work-date-range';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function JobExperienceDetails() {
    const { experience } = useContext(WorkExperienceContext);
    const { name, employmentDuration, contributions } = experience;


    return (
        <section className='job-experience-details'>
            <div className='job-experience-details__div'>
                <div className='job-experience-details__div--title'>
                    <Title text={name} color='royal-blue' type='h3' />
                </div>
                <WorkDateRange
                    employmentDuration={employmentDuration}
                    color='deep-ocean'
                />
            </div>
            <Paragraph text={contributions.join('\n\n')} color='charcoal-grey' />
        </section>
    );
}

export { JobExperienceDetails };
