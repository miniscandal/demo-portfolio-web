import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';

import { aboutMe } from '@shared-resources-data/professional-information/about-me.json';

import './style.css';


function AboutMe() {
    const title = {
        text: 'ABOUT ME',
        color: 'light',
        type: 'h4'
    };
    const paragraphAboutMe = {
        text: aboutMe.description,
        color: 'light',
    };

    return (
        <section className='about-me'>
            <Title {...title} />
            <Paragraph {...paragraphAboutMe} />
        </section>
    )
}

export { AboutMe };
