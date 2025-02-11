import { useContext } from 'react';

import { UseControlRadioInput } from '@shared-custom-hooks/use-control-radio-input';

import { CurrentTechnologicalToolsContext } from '@feat-about-me-contexts/current-technological-tools';

import { KnowledgeImplementation } from '@shared-organisms/knowledge-implementation';
import { KonohaKit } from '@shared-molecules/konoha-kit';

import { Title } from '@shared-atoms/title';

import './style.css';


function TechnologicalTools() {
    const { usedTools, toolsData, knowledgeConceptsData } = useContext(CurrentTechnologicalToolsContext);

    const { radioInputComponents } = UseControlRadioInput();

    const { specialization, developmentEnvironment, interestLearningPractical, concepts } = usedTools;

    const componentsProps = [
        {
            skills: specialization,
            skillsData: toolsData,
        },
        {
            skills: developmentEnvironment,
            skillsData: toolsData,
        },
        {
            skills: interestLearningPractical,
            skillsData: toolsData,
        },
        {
            skills: concepts,
            skillsData: knowledgeConceptsData,
        }
    ];

    const KnowledgeImplementationComponents = componentsProps.map((value, index) => {
        const Component = ({ value, index, data }) => <KonohaKit key={`${index}-${value}`} {...data} />;

        return (
            <KnowledgeImplementation
                {...value}
                key={`${index}-${value}`}
                layoutType='grid'
                columns={3}
                Component={Component}
            />
        );
    });


    return (
        <article className='technological-tools'>
            <Title text='Tech Tools and Knowledge' type='h3' color='light' />
            <div className='technological-tools__div'>
                <fieldset className='technological-tools__div--input-control'>
                    {radioInputComponents}
                </fieldset>
                <div className='technological-tools__div--slider-items'>
                    {KnowledgeImplementationComponents}
                </div>
            </div>
        </article>
    );
}

export { TechnologicalTools };
