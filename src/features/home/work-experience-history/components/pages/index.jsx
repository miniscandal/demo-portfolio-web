import { Title } from '@shared-atoms/title';
import { WorkExperience } from '@feat-home-work-experience-history-organisms/work-experience';

import { alternatingWordOrder } from '@shared-utils/alternating-word-order';

import { en } from '@shared-resources-data/work-experience/experiences.json';

import './style.css';


function WorkExperienceHistory() {
    const title = {
        text: 'WORK EXPERIENCE',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };
    const { ebookDevelopment } = en;
    const { socialEmotionalCompetencies } = ebookDevelopment;

    const workExperience = {
        ...ebookDevelopment,
        socialEmotionalCompetencies: alternatingWordOrder(socialEmotionalCompetencies)
    };


    return (
        <article className='work-experience-history'>
            <Title {...title} />
            <section>
                <WorkExperience  {...workExperience} />
            </section>
        </article>
    );
}

export { WorkExperienceHistory };
