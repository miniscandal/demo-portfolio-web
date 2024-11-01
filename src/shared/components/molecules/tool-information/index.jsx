import { Icon } from '@shared-atoms/icon';
import { Paragraph } from '@shared-atoms/paragraph';

import './style.css';


function ToolInformation({ name, iconSrc, color }) {
    const classList = [
        color
    ].join(' ');
    const icon = {
        src: iconSrc,
        size: 'medium',
        backgroundColor: true
    };
    const paragraph = {
        text: name
    };

    return (
        <a className={`tool-information ${classList}`}>
            <div>
                <Icon {...icon} />
            </div>
            <div style={{ backgroundColor: color }}>
                <Paragraph {...paragraph} />
            </div>
        </a >
    );
}


export { ToolInformation };
