import { useContext } from 'react';

import { ContentVisibilityControllerContext } from '@shared-contexts/content-visibility-controller';

import { CurrentTechnologicalToolsContext } from '@feat-about-me-contexts/current-technological-tools';

import { RadioButtonGroup } from '@shared-molecules/radio-button-group';
import { KnowledgeImplementation } from '@shared-organisms/knowledge-implementation';
import { KonohaKit } from '@shared-molecules/konoha-kit';
import { DetailsSummary } from '@shared-molecules/details-summary';

import { Title } from '@shared-atoms/title';

import './style.css';


function TechnologicalTools() {
    const { usedTools, toolsData, knowledgeConceptsData } = useContext(CurrentTechnologicalToolsContext);
    const {
        labelData,
        groupName,
        selectDefaultHtmlFor,
        ariaLabel,
        LabelComponent,
        detailsSummary: { text }
    } = useContext(ContentVisibilityControllerContext);

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
                <DetailsSummary text={text}>
                    <RadioButtonGroup
                        labelData={labelData}
                        groupName={groupName}
                        selectDefaultHtmlFor={selectDefaultHtmlFor}
                        ariaLabel={ariaLabel}
                        LabelComponent={LabelComponent}
                    />
                </DetailsSummary>
                <div className='technological-tools__div--slider-items'>
                    {KnowledgeImplementationComponents}
                </div>
            </div>
        </article>
    );
}

export { TechnologicalTools };
