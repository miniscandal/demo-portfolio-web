import { DescriptiveCard } from '@feat-about-me-organisms/descriptive-card';
import { CurrentSpecializationTools } from '@feat-about-me-molecules/current-specialization-tools';
import { ProfessionalExperienceTools } from '@feat-about-me-molecules/professional-experience-tools';
import { DevelopmentEnvironmentTools } from '@feat-about-me-molecules/development-environment-tools';
import { ActiveInterestLearningTools } from '@feat-about-me-molecules/active-interest-learning-tools';
import { AboutSummary } from '@feat-about-me-molecules/about-summary';

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
                <div className='descriptive-card'>
                    <DescriptiveCard />
                </div>
                <div className='about-summary'>
                    <CurrentSpecializationTools />
                    <ProfessionalExperienceTools />
                    <DevelopmentEnvironmentTools />
                    <ActiveInterestLearningTools />
                    <AboutSummary />
                </div>
            </section>
        </article>
    );
}

export { AboutMe };
