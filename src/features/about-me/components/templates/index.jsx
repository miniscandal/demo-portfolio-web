import { Header } from '@feat-about-me-organisms/header';
import { MainSection } from '@feat-about-me-organisms/main-section';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';
import { ProfessionalApproach } from '@feat-about-me-organisms/professional-approach';

import './style.css';


function AboutMe() {

    return (
        <article className='about-me'>
            <div className='about-me__div'>
                <Header />
            </div>
            <div className='about-me__div'>
                <MainSection />
                <TechnologicalTools />
                <ProfessionalApproach />
            </div>
        </article >
    );
}

export { AboutMe };
