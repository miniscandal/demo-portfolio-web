import { Title } from '@shared-atoms/title';
import { WorkDateRange } from '@shared-molecules/work-date-range';
import { Paragraph } from '@shared-atoms/paragraph';
import { InterpersonalSkills } from '@feat-home-organisms/interpersonal-skills';
import { TechnicalSkills } from '@feat-home-organisms/technical-skills';

import './style.css';


function MyWorkExperience({
    name,
    employmentDuration = {
        start: {
            year: 1590,
            month: 2
        },
        end: {
            year: 3503,
            month: 9
        }
    },
    descriptionEnglish,
    technologiesTools,
    knowledge,
    interpersonalCompetencies
}) {
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
        text: descriptionEnglish,
        size: 'regular',
        color: 'charcoal-grey'
    };
    const technicalSkills = {
        technologiesTools,
        knowledge
    };

    return (
        <section className='my-work-experience'>
            <header>
                <Title {...title} />
                <WorkDateRange {...workDateRange} />
            </header>
            <section>
                <Paragraph {...paragraph} />
                <TechnicalSkills {...technicalSkills} />
                <InterpersonalSkills interpersonalCompetencies={interpersonalCompetencies} />
            </section>
        </section>
    );
}

export { MyWorkExperience };
