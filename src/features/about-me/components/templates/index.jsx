import { DescriptiveCard } from '@feat-about-me-organisms/descriptive-card';
import { AboutSummary } from '@feat-about-me-molecules/about-summary';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';
import { ProfessionalApproach } from '@feat-about-me-organisms/professional-approach';

import { DecoratedTitle } from '@shared-molecules/decorated-title';

import './style.css';


function AboutMe() {
    const decoratedTitle = {
        text: 'ABOUT ME',
        color: 'light'
    };


    return (
        <article className='about-me'>
            <div className='about-me__div'>
                <DecoratedTitle {...decoratedTitle} />
            </div>
            <section>
                <div className='about-me__section'>
                    <DescriptiveCard />
                    <div>
                        <AboutSummary />
                        <AboutSummary />
                        <AboutSummary />
                    </div>
                </div>
                <TechnologicalTools />
                <ProfessionalApproach />
            </section>
        </article>
    );
}

export { AboutMe };
