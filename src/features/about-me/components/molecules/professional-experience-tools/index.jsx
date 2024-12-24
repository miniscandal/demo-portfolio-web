import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { ToolInformation } from '@shared-molecules/tool-information';

import { en as technologiesToolsData } from '@shared-resources-data/glossaries/technological-tools.json';

import './style.css';


function ProfessionalExperienceTools() {
    const skillsImplementedWork = {
        textTitle: 'Technological Skills Specialization',
        skills: ['laravel', 'mySQL', 'css', 'html', 'javaScript'],
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

export { ProfessionalExperienceTools };
