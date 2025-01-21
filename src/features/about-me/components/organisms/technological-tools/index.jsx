import { SliderControl } from '@feat-about-me-molecules/slider-control';

import { RadioSelectionOptionBox } from '@feat-about-me-molecules/radio-selection-option-box';

import { Title } from '@shared-atoms/title';
import { KonohaKit } from '@shared-molecules/konoha-kit';
import { KnowledgeImplementation } from '@shared-organisms/knowledge-implementation';

import './style.css';


function TechnologicalTools({
    specialization = ['', '', ''],
    developmentEnvironment = ['', '', ''],
    interestLearningPractical = ['', '', ''],
    toolsData
}) {
    const title = {
        text: 'My Technological Tools',
        type: 'h3',
        color: 'light'
    };
    const knowledgeImplementationSpecialization = {
        textTitle: 'Current Specialization',
        skills: specialization,
        skillsInformation: toolsData,
        Component: KonohaKit,
        layoutGrid: true,
        columns: '3'
    };
    const knowledgeImplementationEnvironment = {
        textTitle: 'Development Environment',
        skills: developmentEnvironment,
        skillsInformation: toolsData,
        Component: KonohaKit,
        layoutGrid: true,
        columns: '3'
    };
    const knowledgeImplementationInterest = {
        textTitle: 'Active Learning With Practical Focus',
        skills: interestLearningPractical,
        skillsInformation: toolsData,
        Component: KonohaKit,
        layoutGrid: true,
        columns: '3'
    };
    const sliderControl = {
        selectionOptions: [
            {
                htmlFor: '01',
                text: 'Current specialization'
            },
            {
                htmlFor: '02',
                text: 'Development environment'
            },
            {
                htmlFor: '03',
                text: 'Active learning with practical focus'
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
            <div className='technological-tools__div--knowledge'>
                <KnowledgeImplementation {...knowledgeImplementationSpecialization} />
                <KnowledgeImplementation {...knowledgeImplementationEnvironment} />
                <KnowledgeImplementation {...knowledgeImplementationInterest} />
            </div>
        </section>
    );
}

export { TechnologicalTools };
