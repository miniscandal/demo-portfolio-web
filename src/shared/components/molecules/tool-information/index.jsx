import { Paragraph } from '@shared-atoms/paragraph';
import { Icon } from '@shared-atoms/icon';
import { StarScene } from '@shared-molecules/star-scene';

import './style.css';


function ToolInformation({
    name: text = 'Tool',
    iconSrc = undefined,
    color: bgColor = '#494949'
}) {
    const styles = {
        backgroundColor: bgColor
    };

    return (
        <div className='tool-information'>
            <div className='tool-information__div' style={styles}>
                <Paragraph text={text} color='light' />
            </div>
            <div className='tool-information__div'>
                <Paragraph text={'\u00a0'} />
                <div className='tool-information__div--logo'>
                    <Icon src={iconSrc} size='small' />
                </div>
                <StarScene />
            </div>
        </div>
    );
}


export { ToolInformation };
