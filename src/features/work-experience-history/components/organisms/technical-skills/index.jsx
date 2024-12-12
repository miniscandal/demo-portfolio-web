import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience';

import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { ToolInformation } from '@shared-molecules/tool-information';
import { KnowledgeInformation } from '@shared-molecules/knowledge-information';

import { en as technologiesToolsData } from '@shared-resources-data/glossaries/technological-tools.json';
import { en as knowledgeData } from '@shared-resources-data/glossaries/technological-knowledge.json';

import './style.css';


function TechnicalSkills() {
    const { technologicalTools, technologicalKnowledge } = useContext(WorkExperienceContext);

    const skillsImplementedWorkSkills = {
        textTitle: 'Some tech tools I used',
        skills: technologicalTools,
        skillsInformation: technologiesToolsData,
        Component: ToolInformation,
        columns: '2',
        color: 'royal-blue'
    };
    const skillsImplementedWorkKnowledge = {
        textTitle: 'Some knowledge that I applied',
        skills: technologicalKnowledge,
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
