import { useContext } from 'react';

import { WorkExperienceContext } from '@feat-work-experience-history-contexts/work-experience';

import { ToolInformation } from '@shared-molecules/tool-information';
import { KnowledgeInformation } from '@shared-molecules/knowledge-information';
import { KnowledgeImplementation } from '@shared-organisms/knowledge-implementation';
import { InterpersonalCompetencyInformation } from '@shared-molecules/interpersonal-competency-information';

import './style.css';
import { WorkExperienceTimelineContext } from '@feat-work-experience-history-contexts/work-experience-timeline';


function RelevantSkillsExperience() {
    const { dataGlossaries } = useContext(WorkExperienceTimelineContext);
    const { experience } = useContext(WorkExperienceContext);

    const { technologicalTools, technologicalKnowledge, socialEmotionalCompetencies } = experience;
    const { technologicalToolsData, technologicalKnowledgeData, socialEmotionalCompetenciesData } = dataGlossaries;

    const knowledgeImplementationTechTools = {
        textTitle: 'Relevant Tech Tools Applied',
        skills: technologicalTools,
        skillsData: technologicalToolsData,
        Component: ({ value, index, data }) => <ToolInformation key={`${index}-${value}`} {...data} />,
        layoutType: 'grid',
        columns: '2'
    };
    const knowledgeImplementationTechKnowledge = {
        textTitle: 'Relevant Tech Knowledge Applied',
        skills: technologicalKnowledge,
        skillsData: technologicalKnowledgeData,
        Component: ({ value, index, data }) => <KnowledgeInformation key={`${index}-${value}`} {...data} />
    };
    const knowledgeImplementationSocialCompetencies = {
        textTitle: 'Relevant Interpersonal Aptitudes Applied',
        skills: socialEmotionalCompetencies,
        skillsData: socialEmotionalCompetenciesData,
        Component: ({ value, index, data }) => <InterpersonalCompetencyInformation key={`${index}-${value}`} {...data} />,
        layoutType: 'flex'
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
