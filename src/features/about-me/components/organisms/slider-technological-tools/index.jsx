import { useContext } from 'react';

import { CurrentTechnologicalToolsContext } from '@feat-about-me-contexts/current-technological-tools';

import { SliderControl } from '@feat-about-me-molecules/slider-control';
import { RadioSelectionOptionBox } from '@feat-about-me-molecules/radio-selection-option-box';

import { KnowledgeImplementation } from '@shared-organisms/knowledge-implementation';
import { KonohaKit } from '@shared-molecules/konoha-kit';

import './style.css';


function SliderTechnologicalTools() {
    const { usedTools, toolsData, knowledgeConceptsData } = useContext(CurrentTechnologicalToolsContext);
    const { specialization, developmentEnvironment, interestLearningPractical, concepts } = usedTools;

    const knowledgeImplementationSpecialization = {
        textTitle: '',
        skills: specialization,
        skillsData: toolsData,
        Component: ({ value, index, data }) => <KonohaKit key={`${index}-${value}`} {...data} />,
        layoutType: 'grid',
        columns: '3'
    };
    const knowledgeImplementationEnvironment = {
        textTitle: '',
        skills: developmentEnvironment,
        skillsData: toolsData,
        Component: ({ value, index, data }) => <KonohaKit key={`${index}-${value}`} {...data} />,
        layoutType: 'grid',
        columns: '3'
    };
    const knowledgeImplementationInterest = {
        textTitle: '',
        skills: interestLearningPractical,
        skillsData: toolsData,
        Component: ({ value, index, data }) => <KonohaKit key={`${index}-${value}`} {...data} />,
        layoutType: 'grid',
        columns: '3'
    };
    const knowledgeTechnologicalConcepts = {
        textTitle: '',
        skills: concepts,
        skillsData: knowledgeConceptsData,
        Component: ({ value, index, data }) => <KonohaKit key={`${index}-${value}`} {...data} />,
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
            },
            {
                htmlFor: '04',
                text: 'Main Concepts '
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
                <KnowledgeImplementation {...knowledgeTechnologicalConcepts} />
            </div>
        </fieldset>
    );
}

export { SliderTechnologicalTools };
