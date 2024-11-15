import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { InterpersonalCompetencyInformation } from '@shared-molecules/interpersonal-competency-information';

import interpersonalCompetenciesData from '@shared-resources-data/glossaries/social-emotional-competencies.json';

import './style.css';


function InterpersonalSkills({ interpersonalCompetencies }) {
    const skillsImplementedWork = {
        textTitle: 'Some concepts that I applied',
        skills: interpersonalCompetencies,
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
