import { useContext } from 'react';

import { CurrentTechnologicalToolsContext } from '@feat-about-me-contexts/current-technological-tools';

import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { MainSection } from '@feat-about-me-organisms/main-section';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';
import { ProfessionalApproach } from '@feat-about-me-organisms/professional-approach';

import './style.css';


function AboutMe() {
    const { usedTools, toolsData } = useContext(CurrentTechnologicalToolsContext);

    const decoratedTitle = {
        text: 'ABOUT ME',
        color: 'light'
    };
    const technologicalTools = {
        ...usedTools,
        toolsData
    };

    return (
        <article className='about-me'>
            <header>
                <DecoratedTitle {...decoratedTitle} />
            </header>
            <section>
                <div className='about-me__div--main-section'>
                    <MainSection />
                </div>
                <TechnologicalTools {...technologicalTools} />
                <ProfessionalApproach />
            </section>
        </article >
    );
}

export { AboutMe };
