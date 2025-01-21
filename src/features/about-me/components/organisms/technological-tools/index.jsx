import { SliderControl } from '@feat-about-me-molecules/slider-control';

import { RadioSelectionOptionBox } from '@feat-about-me-molecules/radio-selection-option-box';

import { Title } from '@shared-atoms/title';
import { KonohaKit } from '@shared-molecules/konoha-kit';
import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';

import { en as technologiesToolsData } from '@shared-resources-data/glossaries/technological-tools.json';

import './style.css';


function TechnologicalTools({
    specialization = ['', '', ''],
    developmentEnvironment = ['', '', ''],
    interestLearningPractical = ['', '', '']
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
        columns: '3'
    };
    const developmentEnvironmentTools = {
        textTitle: 'Development Environment',
        skills: developmentEnvironment,
        skillsInformation: technologiesToolsData,
        Component: KonohaKit,
        columns: '3'
    };
    const activeInterestLearningTools = {
        textTitle: 'Active Learning With Practical Focus',
        skills: interestLearningPractical,
        skillsInformation: technologiesToolsData,
        Component: KonohaKit,
        columns: '3'
    };
    const sliderControl = {
        selectionOptions: [
            {
                htmlFor: '01',
                text: 'Current Specialization'
            },
            {
                htmlFor: '02',
                text: 'Development Environment'
            },
            {
                htmlFor: '03',
                text: 'Active Learning With Practical Focus'
            }
        ],
        defaultSelectionOption: '01',
        Component: RadioSelectionOptionBox
    };

    return (
        <section className='technological-tools'>
            <div className='technological-tools__div--title'>
                <Title {...title} />
            </div>
            <div className='technological-tools__div--slider-control'>
                <SliderControl {...sliderControl} />
            </div>
            <div className='technological-tools__div--content'>
                <SkillsImplementedWork {...currentSpecializationTools} />
                <SkillsImplementedWork {...developmentEnvironmentTools} />
                <SkillsImplementedWork {...activeInterestLearningTools} />
            </div>
        </section>
    );
}

export { TechnologicalTools };
