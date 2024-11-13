import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { ToolInformation } from '@shared-molecules/tool-information';

import technologiesToolsData from '@shared-resources-data/glossaries/technological-tools.json';

import './style.css';


function SpecializationTechnologicalSkills() {
    const skillsImplementedWork = {
        textTitle: 'TECHNOLOGICAL SKILLS SPECIALIZATION',
        skills: ['java', 'javaScript', 'css', 'react', 'python', 'springBoot'],
        skillsInformation: technologiesToolsData,
        component: ToolInformation,
        columns: 0,
        color: 'light'
    };

    return (
        <section className='specialization-technological-skills'>
            <SkillsImplementedWork {...skillsImplementedWork} />
        </section>
    );
}

export { SpecializationTechnologicalSkills };
