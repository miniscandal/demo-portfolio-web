import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience-context';

import { InterpersonalSkills } from '@feat-work-experience-history-organisms/interpersonal-skills';
import { TechnicalSkills } from '@feat-work-experience-history-organisms/technical-skills';

import { Title } from '@shared-atoms/title';
import { WorkDateRange } from '@shared-molecules/work-date-range';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function WorkExperience() {
    const { workExperienceData: { name, description, employmentDuration } } = useContext(WorkExperienceContext);

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
        <section className='work-experience'>
            <header>
                <Title {...title} />
                <WorkDateRange {...workDateRange} />
            </header>
            <section>
                <Paragraph {...paragraph} />
                <TechnicalSkills />
                <InterpersonalSkills />
            </section>
        </section>
    );
}

export { WorkExperience };
