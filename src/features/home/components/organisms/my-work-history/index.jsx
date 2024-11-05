import { MyWorkExperience } from '../my-work-experience';

import { alternatingWordOrder } from '@shared-utils/alternating-word-order';

import { ebookDevelopment } from '@shared-resources-data/my-work-history/experiences.json';

import './style.css';


function MyWorkHistory() {
    const { interpersonalCompetencies, descriptionEnglish, ...information } = ebookDevelopment;

    const myWorkExperience = {
        ...information,
        interpersonalCompetencies: alternatingWordOrder(interpersonalCompetencies),
        descriptionEnglish,
    };

    return (
        <section className='my-work-history'>
            <MyWorkExperience  {...myWorkExperience} />
            <MyWorkExperience  {...myWorkExperience} />
        </section>
    );
}

export { MyWorkHistory };
