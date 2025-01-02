import { Paragraph } from '@shared-atoms/paragraph';
import { Icon } from '@shared-atoms/icon';

import './style.css';


function ToolInformation({
    name: text = 'Tool',
    iconSrc = undefined,
    color: bgColor = 'lightpink'
}) {
    const styles = {
        backgroundColor: bgColor
    };
    const icon = {
        src: iconSrc,
        size: 'small'
    };
    const paragraph = {
        text
    };

    return (
        <div className='tool-information'>
            <div className='tool-information__div' style={styles}>
                <Paragraph {...paragraph} />
            </div>
            <div className='tool-information__div'>
                <Icon {...icon} />
            </div>
        </div>
    );
}


export { ToolInformation };
