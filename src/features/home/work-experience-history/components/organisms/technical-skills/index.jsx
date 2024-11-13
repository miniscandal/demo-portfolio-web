import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { ToolInformation } from '@shared-molecules/tool-information';
import { KnowledgeInformation } from '@shared-molecules/knowledge-information';

import technologiesToolsData from '@shared-resources-data/glossaries/technological-tools.json';
import knowledgeData from '@shared-resources-data/glossaries/technological-knowledge.json';

import './style.css';


function TechnicalSkills({ technologiesTools, knowledge }) {
    const skillsImplementedWorkSkills = {
        textTitle: 'Some tech tools I used',
        skills: technologiesTools,
        skillsInformation: technologiesToolsData,
        Component: ToolInformation,
        columns: '2',
        color: 'royal-blue'
    };
    const skillsImplementedWorkKnowledge = {
        textTitle: 'Some knowledge that I applied',
        skills: knowledge,
        skillsInformation: knowledgeData,
        Component: KnowledgeInformation,
        columns: '1',
        color: 'royal-blue'
    };

    return (
        <section className='technical-skills'>
            <SkillsImplementedWork {...skillsImplementedWorkSkills} />
            <SkillsImplementedWork {...skillsImplementedWorkKnowledge} />
        </section>
    );
}

export { TechnicalSkills };
