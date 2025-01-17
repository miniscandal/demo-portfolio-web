import { Title } from '@shared-atoms/title';
import { KonohaKit } from '@shared-molecules/konoha-kit';
import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';

import { en as technologiesToolsData } from '@shared-resources-data/glossaries/technological-tools.json';

import './style.css';


function TechnologicalTools({
    specialization = [''],
    developmentEnvironment = [''],
    interestLearningPractical = ['']
}) {
    const title = {
        text: 'My Technological Tools',
        type: 'h3',
        color: 'light'
    };
    const currentSpecializationTools = {
        textTitle: 'Current Specialization',
        skills: specialization,
        skillsInformation: technologiesToolsData,
        Component: KonohaKit,
        columns: 'auto'
    };
    const developmentEnvironmentTools = {
        textTitle: 'Development Environment',
        skills: developmentEnvironment,
        skillsInformation: technologiesToolsData,
        Component: KonohaKit,
        columns: 'auto'
    };
    const activeInterestLearningTools = {
        textTitle: 'Active Learning With Practical Focus',
        skills: interestLearningPractical,
        skillsInformation: technologiesToolsData,
        Component: KonohaKit,
        columns: 'auto'
    };

    return (
        <section className='technological-tools'>
            <div className='technological-tools__div'>
                <Title {...title} />
            </div>
            <div className='technological-tools__div'>
                <SkillsImplementedWork {...currentSpecializationTools} />
                <SkillsImplementedWork {...developmentEnvironmentTools} />
                <SkillsImplementedWork {...activeInterestLearningTools} />
            </div>
        </section>
    );
}

export { TechnologicalTools };
