import { MyWorkExperience } from '@feat-home-performance-and-results-organisms/my-work-experience';
import { Title } from '@shared-atoms/title';

import { WORK_EXPERIENCE } from '@shared-constants/anchor-id';

import { alternatingWordOrder } from '@shared-utils/alternating-word-order';
import { ebookDevelopment } from '@shared-resources-data/my-work-history/experiences.json';

import './style.css';


function PerformanceAndResults() {
    const title = {
        text: 'PROFESSIONAL JOURNEY - KNOWLEDGE APPLIED',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };
    const { interpersonalCompetencies } = ebookDevelopment;
    const myWorkExperience = {
        ...ebookDevelopment,
        interpersonalCompetencies: alternatingWordOrder(interpersonalCompetencies)
    };


    return (
        <article id={WORK_EXPERIENCE} className='performance-and-results'>
            <Title {...title} />
            <section>
                <MyWorkExperience  {...myWorkExperience} />
            </section>
        </article>
    );
}

export { PerformanceAndResults };
