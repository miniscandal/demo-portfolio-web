import { DescriptiveCard } from '@feat-about-me-organisms/descriptive-card';
import { AboutSummary } from '@feat-about-me-molecules/about-summary';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';

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
                <div className='about-me__div'>
                    <DescriptiveCard />
                    <div>
                        <AboutSummary />
                        <AboutSummary />
                        <AboutSummary />
                    </div>
                </div>
                <TechnologicalTools />
            </section>
        </article>
    );
}

export { AboutMe };
