import { Title } from '@shared-atoms/title';
import { KonohaKit } from '@shared-molecules/konoha-kit';
import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';

import { en as technologiesToolsData } from '@shared-resources-data/glossaries/technological-tools.json';

import './style.css';


function TechnologicalTools() {
    const title = {
        text: 'My Technological Tools',
        type: 'h3'
    };
    const currentSpecializationTools = {
        textTitle: 'Current Specialization',
        skills: ['java', 'springBoot', 'mySQL'],
        skillsInformation: technologiesToolsData,
        Component: KonohaKit,
        columns: 0
    };
    const developmentEnvironmentTools = {
        textTitle: 'Development Environment',
        skills: ['linux', 'python', 'git'],
        skillsInformation: technologiesToolsData,
        Component: KonohaKit,
        columns: 3
    };
    const activeInterestLearningTools = {
        textTitle: 'Active Learning Interest',
        skills: ['javaScript', 'html', 'css', 'angular', 'react', 'typeScript'],
        skillsInformation: technologiesToolsData,
        Component: KonohaKit,
        columns: 3
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
