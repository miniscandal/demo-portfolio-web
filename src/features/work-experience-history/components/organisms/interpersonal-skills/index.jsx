import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience';

import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { InterpersonalCompetencyInformation } from '@shared-molecules/interpersonal-competency-information';

import { en as interpersonalCompetenciesData } from '@shared-resources-data/glossaries/social-emotional-competencies.json';

import './style.css';


function InterpersonalSkills() {
    const { socialEmotionalCompetencies } = useContext(WorkExperienceContext);

    const skillsImplementedWork = {
        textTitle: 'Some concepts that I applied',
        skills: socialEmotionalCompetencies,
        skillsInformation: interpersonalCompetenciesData,
        Component: InterpersonalCompetencyInformation,
        columns: 0,
        color: 'royal-blue'
    };

    return (
        <section className='interpersonal-skills'>
            <SkillsImplementedWork {...skillsImplementedWork} />
        </section>
    );
}

export { InterpersonalSkills };
