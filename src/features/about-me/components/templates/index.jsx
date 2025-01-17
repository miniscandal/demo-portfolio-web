import { useContext } from 'react';

import { CurrentTechnologicalToolsContext } from '@feat-about-me-contexts/current-technological-tools';

import { Header } from '@feat-about-me-organisms/header';
import { MainSection } from '@feat-about-me-organisms/main-section';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';
import { ProfessionalApproach } from '@feat-about-me-organisms/professional-approach';

import './style.css';


function AboutMe() {
    const { specialization, developmentEnvironment, interestLearningPractical } = useContext(CurrentTechnologicalToolsContext);

    const technologicalTools = {
        specialization,
        developmentEnvironment,
        interestLearningPractical
    };

    return (
        <article className='about-me'>
            <div className='about-me__div'>
                <Header />
            </div>
            <div className='about-me__div'>
                <MainSection />
                <TechnologicalTools {...technologicalTools} />
                <ProfessionalApproach />
            </div>
        </article >
    );
}

export { AboutMe };
