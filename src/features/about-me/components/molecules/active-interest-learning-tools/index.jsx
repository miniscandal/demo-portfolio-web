import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { ToolInformation } from '@shared-molecules/tool-information';

import { en as technologiesToolsData } from '@shared-resources-data/glossaries/technological-tools.json';

import './style.css';


function ActiveInterestLearningTools() {
    const skillsImplementedWork = {
        textTitle: 'Technological Skills Specialization',
        skills: ['angular', 'react', 'typeScript'],
        skillsInformation: technologiesToolsData,
        Component: ToolInformation,
        columns: 0
    };

    return (
        <section>
            <SkillsImplementedWork {...skillsImplementedWork} />
        </section>
    );
}

export { ActiveInterestLearningTools };
