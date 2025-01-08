import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience';

import { Title } from '@shared-atoms/title';
import { WorkDateRange } from '@shared-molecules/work-date-range';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function JobExperienceDetails() {
    const { name, employmentDuration, contributions } = useContext(WorkExperienceContext);

    const title = {
        text: name,
        color: 'royal-blue',
        type: 'h3'
    };
    const workDateRange = {
        employmentDuration,
        color: 'deep-ocean'
    };
    const paragraph = {
        text: contributions.join('\n\n'),
        color: 'charcoal-grey'
    };

    return (
        <section className='job-experience-details'>
            <div className='job-experience-details__div'>
                <div className='job-experience-details__div--title'>
                    <Title {...title} />
                </div>
                <WorkDateRange {...workDateRange} />
            </div>
            <Paragraph  {...paragraph} />
        </section>
    );
}

export { JobExperienceDetails };
