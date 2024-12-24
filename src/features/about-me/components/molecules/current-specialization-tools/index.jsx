import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { ToolInformation } from '@shared-molecules/tool-information';

import { en as technologiesToolsData } from '@shared-resources-data/glossaries/technological-tools.json';

import './style.css';


function CurrentSpecializationTools() {
    const skillsImplementedWork = {
        textTitle: 'Technological Skills Specialization',
        skills: ['java', 'springBoot', 'mySQL'],
        skillsInformation: technologiesToolsData,
        Component: ToolInformation,
        columns: 0
    };

    return (
        <section className='current-specialization-tools'>
            <SkillsImplementedWork {...skillsImplementedWork} />
        </section>
    );
}

export { CurrentSpecializationTools };
