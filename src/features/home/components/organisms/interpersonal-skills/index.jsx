import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { InterpersonalCompetencyInformation } from '@shared-molecules/interpersonal-competency-information';

import interpersonalCompetenciesData from '@shared-resources-data/my-work-history/interpersonal-competencies.json';

import './style.css';


function InterpersonalSkills({ interpersonalCompetencies }) {

    return (
        <section className='interpersonal-skills'>
            <SkillsImplementedWork
                textTitle='Some concepts that I applied'
                skills={interpersonalCompetencies}
                skillsInformation={interpersonalCompetenciesData}
                Component={InterpersonalCompetencyInformation}
                columns='auto'
            />
        </section>
    );
}

export { InterpersonalSkills };
