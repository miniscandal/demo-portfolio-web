import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { MainSection } from '@feat-about-me-organisms/main-section';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';
import { ProfessionalApproach } from '@feat-about-me-organisms/professional-approach';

import './style.css';


function AboutMe() {
    const decoratedTitle = {
        text: 'ABOUT ME',
        color: 'light'
    };

    return (
        <article className='about-me'>
            <header>
                <DecoratedTitle {...decoratedTitle} />
            </header>
            <section>
                <MainSection />
                <TechnologicalTools />
                <ProfessionalApproach />
            </section>
        </article >
    );
}

export { AboutMe };
