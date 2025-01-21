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
        textTitle: '',
        skills: specialization,
        skillsInformation: toolsData,
        Component: KonohaKit,
        layoutType: 'grid',
        columns: '3'
    };
    const knowledgeImplementationEnvironment = {
        textTitle: '',
        skills: developmentEnvironment,
        skillsInformation: toolsData,
        Component: KonohaKit,
        layoutType: 'grid',
        columns: '3'
    };
    const knowledgeImplementationInterest = {
        textTitle: '',
        skills: interestLearningPractical,
        skillsInformation: toolsData,
        Component: KonohaKit,
        layoutType: 'grid',
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
                text: 'Active Practical Approach'
            }
        ],
        defaultSelectionOption: '01',
        Component: RadioSelectionOptionBox
    };

    return (
        <section className='technological-tools'>
            <div className='technological-tools__div'>
                <Title {...title} />
            </div>
            <div className='technological-tools__div'>
                <div className='technological-tools__div--slider-control'>
                    <SliderControl {...sliderControl} />
                </div>
                <div className='technological-tools__div--knowledge'>
                    <KnowledgeImplementation {...knowledgeImplementationSpecialization} />
                    <KnowledgeImplementation {...knowledgeImplementationEnvironment} />
                    <KnowledgeImplementation {...knowledgeImplementationInterest} />
                </div>
            </div>
        </section>
    );
}

export { TechnologicalTools };
