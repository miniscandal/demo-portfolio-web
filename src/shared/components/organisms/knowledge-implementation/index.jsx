import { ToolInformation } from '@shared-molecules/tool-information';
import { Title } from '@shared-atoms/title';

import './style.css';


function KnowledgeImplementation({
    textTitle = 'Knowledge Implementation Grid',
    skills = ['skill', 'skill', 'skill'],
    skillsInformation = {
        'skill': {
            'name': 'First Skill',
            'colorTitle': 'lightpink',
            'iconSrc': undefined
        }
    },
    Component = ToolInformation,
    layoutGrid = false,
    columns = 2,
    titleColor: color = 'light'
}) {
    const classList = [
        layoutGrid ? 'grid' : 'flex'
    ];
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
        <section className={`knowledge-implementation ${classList.join(' ')}`}>
            <div className='knowledge-implementation__div--title'>
                <Title {...title} />
            </div>
            <div className='knowledge-implementation__div--items' data-columns={columns}>
                {components}
            </div>
        </section>
    );
}

export { KnowledgeImplementation };
