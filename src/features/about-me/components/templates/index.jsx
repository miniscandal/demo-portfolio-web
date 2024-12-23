import { DescriptiveCard } from '@feat-about-me-organisms/descriptive-card';

import { Title } from '@shared-atoms/title';
import { RotatedTextPoster } from '@feat-about-me-molecules/rotated-text-poster';

import './style.css';


function AboutMe() {
    const title = {
        text: 'ABOUT ME',
        type: 'h2',
        decorated: true
    };
    const rotatedTextPoster = {
        text: 'DEVELOPER'
    };


    return (
        <article className='about-me'>
            <Title {...title} />
            <section>
                <DescriptiveCard />
                <div>
                    <RotatedTextPoster {...rotatedTextPoster} />
                </div>
            </section>
        </article>
    );
}

export { AboutMe };
