import { MiniGameProvider } from '@feat-about-me-contexts/mini-game';

import { DescriptiveCard } from '@feat-about-me-organisms/descriptive-card';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';
import { ProfessionalApproach } from '@feat-about-me-organisms/professional-approach';
import { ProfessionalProfileOverview } from '@feat-about-me-organisms/professional-profile-overview';

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
            <section className='about-me__section'>
                <div className='about-me-section__div'>
                    <MiniGameProvider>
                        <DescriptiveCard />
                        <div className='about-me-section__div--texts'>
                            <ProfessionalProfileOverview />
                        </div>
                    </MiniGameProvider>
                </div>
                <TechnologicalTools />
                <ProfessionalApproach />
            </section>
        </article>
    );
}

export { AboutMe };
