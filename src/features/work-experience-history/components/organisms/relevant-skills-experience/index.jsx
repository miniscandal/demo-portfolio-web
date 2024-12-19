import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience';

import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { ToolInformation } from '@shared-molecules/tool-information';
import { KnowledgeInformation } from '@shared-molecules/knowledge-information';
import { InterpersonalCompetencyInformation } from '@shared-molecules/interpersonal-competency-information';

import { en as technologiesToolsData } from '@shared-resources-data/glossaries/technological-tools.json';
import { en as knowledgeData } from '@shared-resources-data/glossaries/technological-knowledge.json';
import { en as interpersonalCompetenciesData } from '@shared-resources-data/glossaries/social-emotional-competencies.json';

import './style.css';


function RelevantSkillsExperience() {
    const { technologicalTools, technologicalKnowledge, socialEmotionalCompetencies } = useContext(WorkExperienceContext);

    const skillsImplementedWorkTechTools = {
        textTitle: 'Relevant Tech Tools Applied',
        skills: technologicalTools,
        skillsInformation: technologiesToolsData,
        Component: ToolInformation,
        columns: '2',
        color: 'royal-blue'
    };
    const skillsImplementedWorkTechKnowledge = {
        textTitle: 'Relevant Tech Knowledge Applied',
        skills: technologicalKnowledge,
        skillsInformation: knowledgeData,
        Component: KnowledgeInformation,
        columns: '1',
        color: 'royal-blue'
    };
    const skillsImplementedWorkSocialCompetencies = {
        textTitle: 'Relevant Interpersonal Aptitudes Applied',
        skills: socialEmotionalCompetencies,
        skillsInformation: interpersonalCompetenciesData,
        Component: InterpersonalCompetencyInformation,
        columns: 0,
        color: 'royal-blue'
    };

    return (
        <section className='relevant-skills-experience'>
            <div>
                <SkillsImplementedWork {...skillsImplementedWorkTechTools} />
                <SkillsImplementedWork {...skillsImplementedWorkTechKnowledge} />
            </div>
            <SkillsImplementedWork {...skillsImplementedWorkSocialCompetencies} />
        </section>
    );
}

export { RelevantSkillsExperience };
