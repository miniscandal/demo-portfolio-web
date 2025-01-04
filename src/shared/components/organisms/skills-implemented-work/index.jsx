import { ToolInformation } from '@shared-molecules/tool-information';
import { Title } from '@shared-atoms/title';

import './style.css';


function SkillsImplementedWork({
    textTitle = 'Skills Implemented Work',
    skills = ['skill', 'skill', 'skill'],
    skillsInformation = {
        'skill': {
            'name': 'First Skill',
            'color': 'lightpink',
            'iconSrc': undefined
        }
    },
    Component = ToolInformation,
    columns = 2,
    color = 'light'
}) {
    const title = {
        text: textTitle,
        color,
        type: 'h4'
    };
    const components = skills.map((value, index) => (
        <Component
            key={`${index}-${value.text}`}
            {...skillsInformation[value]} size='auto'
        />
    ));

    return (
        <section className='skills-implemented-work'>
            <div className='skills-implemented-work__div'>
                <Title {...title} />
            </div>
            <div className='skills-implemented-work__div' data-columns={columns}>
                {components}
            </div>
        </section>
    );
}

export { SkillsImplementedWork };
