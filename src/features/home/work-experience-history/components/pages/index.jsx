import { Title } from '@shared-atoms/title';
import { WorkExperience } from '@feat-home-work-experience-history-organisms/work-experience';

import { alternatingWordOrder } from '@shared-utils/alternating-word-order';
import { ebookDevelopment } from '@shared-resources-data/my-work-history/experiences.json';

import './style.css';


function WorkExperienceHistory() {
    const title = {
        text: 'WORK EXPERIENCE',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };
    const { interpersonalCompetencies } = ebookDevelopment;
    const workExperience = {
        ...ebookDevelopment,
        interpersonalCompetencies: alternatingWordOrder(interpersonalCompetencies)
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
