import { useContext } from 'react';

import { CurrentTechnologicalToolsContext } from '@feat-about-me-contexts/current-technological-tools';

import { SliderControl } from '@feat-about-me-molecules/slider-control';
import { RadioSelectionOptionBox } from '@feat-about-me-molecules/radio-selection-option-box';

import { KnowledgeImplementation } from '@shared-organisms/knowledge-implementation';
import { KonohaKit } from '@shared-molecules/konoha-kit';

import './style.css';


function SliderTechnologicalTools() {
    const { usedTools, toolsData } = useContext(CurrentTechnologicalToolsContext);
    const { specialization, developmentEnvironment, interestLearningPractical } = usedTools;

    const knowledgeImplementationSpecialization = {
        textTitle: '',
        skills: specialization,
        skillsInformation: toolsData,
        Component: KonohaKit,
        layoutType: 'grid',
        columns: '2'
    };
    const knowledgeImplementationEnvironment = {
        textTitle: '',
        skills: developmentEnvironment,
        skillsInformation: toolsData,
        Component: KonohaKit,
        layoutType: 'grid',
        columns: '2'
    };
    const knowledgeImplementationInterest = {
        textTitle: '',
        skills: interestLearningPractical,
        skillsInformation: toolsData,
        Component: KonohaKit,
        layoutType: 'grid',
        columns: '2'
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
        <fieldset className='slider-technological-tools'>
            <div className='slider-technological-tools__div'>
                <SliderControl {...sliderControl} />
            </div>
            <div className='slider-technological-tools__div'>
                <KnowledgeImplementation {...knowledgeImplementationSpecialization} />
                <KnowledgeImplementation {...knowledgeImplementationEnvironment} />
                <KnowledgeImplementation {...knowledgeImplementationInterest} />
            </div>
        </fieldset>
    );
}

export { SliderTechnologicalTools };
