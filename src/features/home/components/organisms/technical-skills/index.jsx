import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { ToolInformation } from '@shared-molecules/tool-information';
import { KnowledgeInformation } from '@shared-molecules/knowledge-information';

import technologiesToolsData from '@shared-resources-data/my-work-history/technological-tools.json';
import knowledgeData from '@shared-resources-data/my-work-history/knowledge.json';

import './style.css';


function TechnicalSkills({ technologiesTools, knowledge }) {

    return (
        <section className='technical-skills'>
            <SkillsImplementedWork
                textTitle='Some tech tools I used'
                skills={technologiesTools}
                skillsInformation={technologiesToolsData}
                Component={ToolInformation}
                columns='2'
            />
            <SkillsImplementedWork
                textTitle='Some knowledge that I applied'
                skills={knowledge}
                skillsInformation={knowledgeData}
                Component={KnowledgeInformation}
                columns='1'
            />
        </section>
    );
}

export { TechnicalSkills };
