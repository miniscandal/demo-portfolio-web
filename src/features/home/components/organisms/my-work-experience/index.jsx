import { Title } from '@shared-atoms/title';
import { WorkDateRange } from '@shared-molecules/work-date-range';
import { Paragraph } from '@shared-atoms/paragraph';
import { ToolsAppliedProject } from '@shared-organisms/tools-applied-project';
import { ToolInformation } from '@shared-molecules/tool-information';
import { TechnologyConcept } from '@shared-molecules/technology-concept';
import { PersonalAttitude } from '@shared-molecules/personal-attitude';

import toolsJson from '@shared-resources-json/my-work-history/tools.json';
import conceptsJson from '@shared-resources-json/my-work-history/concepts.json';
import attitudesJson from '@shared-resources-json/my-work-history/attitudes.json';

import './style.css';


function MyWorkExperience({
    name,
    date,
    descriptionEnglish,
    technologies,
    concepts,
    attitudes
}) {
    const title = {
        text: name,
        color: 'color-royal-blue',
        type: 'h3'
    };
    const paragraph = {
        text: descriptionEnglish,
        size: 'regular',
        color: 'charcoal-grey'
    };
    const { start, end } = date;
    const callback = ({ value, index }) => {

        return <ToolInformation key={index} {...toolsJson[value]} />;
    };
    const callbackTechConcept = ({ value, index }) => {

        return <TechnologyConcept key={index + 'a'} {...conceptsJson[value]} />;
    };
    const callbackPersonalAttitude = ({ value, index }) => {

        return <PersonalAttitude key={index + 'a'} {...attitudesJson[value]} />;
    };

    return (
        <section className='my-work-experience'>
            <Title {...title} />
            <WorkDateRange {...start} {...end} />
            <Paragraph {...paragraph} />
            <div>
                <ToolsAppliedProject text='Some tech tools I used' tools={technologies} callback={callback} columns={2} />
                <ToolsAppliedProject text='Some concepts that I applied' tools={concepts} callback={callbackTechConcept} />
            </div>
            <div>
                <ToolsAppliedProject text='Some personal skills that I managed to strengthen' tools={attitudes} callback={callbackPersonalAttitude} columns={0} />
            </div>
        </section>
    );
}

export { MyWorkExperience };
