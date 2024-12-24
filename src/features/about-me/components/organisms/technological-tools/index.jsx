import { CurrentSpecializationTools } from '@feat-about-me-molecules/current-specialization-tools';
import { ProfessionalExperienceTools } from '@feat-about-me-molecules/professional-experience-tools';
import { DevelopmentEnvironmentTools } from '@feat-about-me-molecules/development-environment-tools';
import { ActiveInterestLearningTools } from '@feat-about-me-molecules/active-interest-learning-tools';

import './style.css';


function TechnologicalTools() {

    return (
        <section className='technological-tools'>
            <CurrentSpecializationTools />
            <ProfessionalExperienceTools />
            <DevelopmentEnvironmentTools />
            <ActiveInterestLearningTools />
        </section>
    );
}

export { TechnologicalTools };
