import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { MainSection } from '@feat-about-me-organisms/main-section';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';

import { GoalsThrough } from '@feat-about-me-organisms/goals-through';


import './style.css';


function AboutMe() {

    return (
        <article className='about-me'>
            <header>
                <DecoratedTitle text='ABOUT ME' color='light' />
            </header>
            <section>
                <MainSection />
                <TechnologicalTools />
                <GoalsThrough />
            </section>
        </article>
    );
}

export { AboutMe };
