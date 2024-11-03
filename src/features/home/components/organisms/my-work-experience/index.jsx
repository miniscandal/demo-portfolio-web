import { Title } from '@shared-atoms/title';
import { WorkDateRange } from '@shared-molecules/work-date-range';
import { Paragraph } from '@shared-atoms/paragraph';
import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { ToolInformation } from '@shared-molecules/tool-information';
import { KnowledgeInformation } from '@shared-molecules/knowledge-information';
import { InterpersonalCompetencyInformation } from '@shared-molecules/interpersonal-competency-information';

import technologiesToolsData from '@shared-resources-data/my-work-history/technological-tools.json';
import knowledgeData from '@shared-resources-data/my-work-history/knowledge.json';
import interpersonalCompetenciesData from '@shared-resources-data/my-work-history/interpersonal-competencies.json';

import './style.css';


function MyWorkExperience({
    name,
    employmentDuration = {
        start: {
            year: 1590,
            month: 2
        },
        end: {
            year: 3503,
            month: 9
        }
    },
    descriptionEnglish,
    technologiesTools,
    knowledge,
    interpersonalCompetencies
}) {
    const title = {
        text: name,
        color: 'royal-blue',
        type: 'h3'
    };
    const workDateRange = {
        employmentDuration,
        color: 'deep-ocean'
    };

    const paragraph = {
        text: descriptionEnglish,
        size: 'regular',
        color: 'charcoal-grey'
    };

    return (
        <section className='my-work-experience'>
            <header>
                <Title {...title} />
                <WorkDateRange {...workDateRange} />
            </header>
            <section>
                <Paragraph {...paragraph} />
                <div className='my-work-experience__div'>
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
                </div>
                <SkillsImplementedWork
                    textTitle='Some concepts that I applied'
                    skills={interpersonalCompetencies}
                    skillsInformation={interpersonalCompetenciesData}
                    Component={InterpersonalCompetencyInformation}
                    columns='auto'
                />
            </section>
        </section>
    );
}

export { MyWorkExperience };
