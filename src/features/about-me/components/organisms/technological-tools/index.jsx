import { Title } from '@shared-atoms/title';
import { ToolInformation } from '@shared-molecules/tool-information';
import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';

import { en as technologiesToolsData } from '@shared-resources-data/glossaries/technological-tools.json';

import './style.css';


function TechnologicalTools() {
    const title = {
        text: 'My Technological Tools',
        type: 'h3'
    };
    const currentSpecializationTools = {
        textTitle: 'Technological Skills Specialization',
        skills: ['java', 'springBoot', 'mySQL', 'javaScript', 'html', 'css'],
        skillsInformation: technologiesToolsData,
        Component: ToolInformation,
        columns: 2
    };
    const developmentEnvironmentTools = {
        textTitle: 'Technological Skills Specialization',
        skills: ['linux', 'windows', 'python', 'git'],
        skillsInformation: technologiesToolsData,
        Component: ToolInformation,
        columns: 2
    };
    const activeInterestLearningTools = {
        textTitle: 'Technological Skills Specialization',
        skills: ['angular', 'react', 'typeScript'],
        skillsInformation: technologiesToolsData,
        Component: ToolInformation,
        columns: 2
    };

    return (
        <section className='technological-tools'>
            <Title {...title} />
            <div className='technological-tools__div'>
                <SkillsImplementedWork {...currentSpecializationTools} />
                <SkillsImplementedWork {...developmentEnvironmentTools} />
                <SkillsImplementedWork {...activeInterestLearningTools} />
            </div>
        </section>
    );
}

export { TechnologicalTools };
