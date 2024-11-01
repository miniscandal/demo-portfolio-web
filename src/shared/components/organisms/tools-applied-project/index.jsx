import { Title } from '@shared-atoms/title';

import './style.css';


function ToolsAppliedProject({ text, tools, callback, columns = 1 }) {
    const classList = [
        `columns-${columns}`
    ].join(' ');
    const title = {
        text,
        color: 'color-royal-blue',
        type: 'h4'
    };
    const tooltips = tools.map((value, index) => callback({ value, index }));

    return (
        <section className={`tools-applied-project ${classList}`}>
            <Title {...title} />
            <div>
                {tooltips}
            </div>
        </section>
    );
}

export { ToolsAppliedProject };
