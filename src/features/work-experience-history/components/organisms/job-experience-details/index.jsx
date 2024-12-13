import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience';

import { Title } from '@shared-atoms/title';
import { WorkDateRange } from '@shared-molecules/work-date-range';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function JobExperienceDetails() {
    const { name, employmentDuration, description } = useContext(WorkExperienceContext);

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
        text: description,
        size: 'regular',
        color: 'charcoal-grey'
    };

    return (
        <section className='job-experience-details'>
            <div>
                <Title {...title} />
                <WorkDateRange {...workDateRange} />
            </div>
            <div>
                <Paragraph  {...paragraph} />
            </div>
        </section>
    );
}

export { JobExperienceDetails };
