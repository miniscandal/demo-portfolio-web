import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience';

import { ToolInformation } from '@shared-molecules/tool-information';
import { KnowledgeInformation } from '@shared-molecules/knowledge-information';
import { KnowledgeImplementation } from '@shared-organisms/knowledge-implementation';
import { InterpersonalCompetencyInformation } from '@shared-molecules/interpersonal-competency-information';

import { en as technologicalToolsData } from '@shared-resources-data/glossaries/technological-tools.json';
import { en as technologicalKnowledgeData } from '@shared-resources-data/glossaries/technological-knowledge.json';
import { en as socialEmotionalCompetenciesData } from '@shared-resources-data/glossaries/social-emotional-competencies.json';

import './style.css';


function RelevantSkillsExperience() {
    const { technologicalTools, technologicalKnowledge, socialEmotionalCompetencies } = useContext(WorkExperienceContext);

    const knowledgeImplementationTechTools = {
        textTitle: 'Relevant Tech Tools Applied',
        skills: technologicalTools,
        skillsInformation: technologicalToolsData,
        Component: ToolInformation,
        layoutGrid: true,
        columns: '2',
        titleColor: 'royal-blue'
    };
    const knowledgeImplementationTechKnowledge = {
        textTitle: 'Relevant Tech Knowledge Applied',
        skills: technologicalKnowledge,
        skillsInformation: technologicalKnowledgeData,
        Component: KnowledgeInformation,
        columns: '1',
        layoutGrid: true,
        titleColor: 'royal-blue'
    };
    const knowledgeImplementationSocialCompetencies = {
        textTitle: 'Relevant Interpersonal Aptitudes Applied',
        skills: socialEmotionalCompetencies,
        skillsInformation: socialEmotionalCompetenciesData,
        Component: InterpersonalCompetencyInformation,
        titleColor: 'royal-blue'
    };


    return (
        <section className='relevant-skills-experience'>
            <div className='relevant-skills-experience__div'>
                <KnowledgeImplementation {...knowledgeImplementationTechTools} />
                <KnowledgeImplementation {...knowledgeImplementationTechKnowledge} />
            </div>
            <KnowledgeImplementation {...knowledgeImplementationSocialCompetencies} />
        </section>
    );
}

export { RelevantSkillsExperience };
