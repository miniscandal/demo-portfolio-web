import { Title } from '@shared-atoms/title';
import { MyWorkExperience } from '../my-work-experience';

import { ebookDevelopment } from '@shared-resources-json/my-work-history/experience.json';

import './style.css';


function MyWorkHistory() {
    const title = {
        text: 'PERFORMANCE AND RESULTS',
        color: 'charcoal-grey',
        type: 'h2',
        decorated: true
    };

    const myWorkExperience = ebookDevelopment;

    return (
        <section className='my-work-history'>
            <Title {...title} />
            <MyWorkExperience  {...myWorkExperience} />
        </section>
    );
}

export { MyWorkHistory };
