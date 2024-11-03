import { Title } from '@shared-atoms/title';
import { MyWorkExperience } from '../my-work-experience';

import { alternatingWordOrder } from '@shared-utils/alternating-word-order';

import { ebookDevelopment } from '@shared-resources-data/my-work-history/experiences.json';

import './style.css';


function MyWorkHistory() {
    const title = {
        text: 'PERFORMANCE AND RESULTS',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };
    const { interpersonalCompetencies, descriptionEnglish, ...information } = ebookDevelopment;

    const myWorkExperience = {
        ...information,
        interpersonalCompetencies: alternatingWordOrder(interpersonalCompetencies),
        descriptionEnglish,
    };

    return (
        <section className='my-work-history'>
            <Title {...title} />
            <div>
                <MyWorkExperience  {...myWorkExperience} />
            </div>
        </section>
    );
}

export { MyWorkHistory };
