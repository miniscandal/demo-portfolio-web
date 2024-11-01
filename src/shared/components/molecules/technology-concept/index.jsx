import { Paragraph } from '@shared-atoms/paragraph';
import { Icon } from '@shared-atoms/icon';

import './style.css';


function TechnologyConcept({ name, color }) {
    const classList = [];
    const paragraph = {
        text: name
    };

    return (
        <a className={`technology-concept ${classList}`} style={{ backgroundColor: color }}>
            <Paragraph {...paragraph} />
            <Icon />
        </a>
    );
}

export { TechnologyConcept };
