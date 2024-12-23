import { DescriptiveCard } from '@feat-about-me-organisms/descriptive-card';

import { Title } from '@shared-atoms/title';

import './style.css';


function AboutMe() {
    const title = {
        text: 'ABOUT ME',
        type: 'h2',
        decorated: true
    };


    return (
        <article className='about-me'>
            <Title {...title} />
            <section>
                <div>
                    <DescriptiveCard />
                </div>
            </section>
        </article>
    );
}

export { AboutMe };
