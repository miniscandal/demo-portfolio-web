import { Paragraph } from '@shared-atoms/paragraph';
import { Icon } from '@shared-atoms/icon';

import './style.css';


function ToolInformation({
    name: text = 'Tool',
    iconSrc = undefined,
    color: bgColor = 'lightpink'
}) {
    const icon = {
        src: iconSrc,
        size: 'small'
    };
    const paragraph = {
        text
    };

    return (
        <div className='tool-information'>
            <div style={{ backgroundColor: bgColor }}>
                <Paragraph {...paragraph} />
            </div>
            <div>
                <Paragraph text={'_'} />
                <div>
                    <Icon {...icon} />
                </div>
            </div>
        </div>
    );
}


export { ToolInformation };
