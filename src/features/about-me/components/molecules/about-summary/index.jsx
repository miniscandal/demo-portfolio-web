import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';

import { en as aboutMe } from '@shared-resources-data/professional-information/about-me.json';

import './style.css';


function AboutSummary() {
    const { description } = aboutMe;
    const title = {
        text: 'About Summary',
        color: 'light',
        type: 'h4'
    };
    const paragraph = {
        text: description,
        color: 'light',
    };

    return (
        <section className='about-summary'>
            <div className='about-summary__div'>
                <Title {...title} />
            </div>
            <Paragraph {...paragraph} />
        </section>
    )
}

export { AboutSummary };
