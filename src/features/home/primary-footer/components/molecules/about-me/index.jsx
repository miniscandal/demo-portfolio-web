import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';

import { en as aboutMe } from '@shared-resources-data/professional-information/about-me.json';

import './style.css';


function AboutMe() {
    const { description } = aboutMe;
    const title = {
        text: 'ABOUT ME',
        color: 'light',
        type: 'h4'
    };
    const paragraphAboutMe = {
        text: description,
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
