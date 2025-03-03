import { Paragraph } from '@shared-atoms/paragraph';
import { Icon } from '@shared-atoms/icon';
import { SceneStarsUniverse } from '@shared-molecules/scene-stars-universe';

import './style.css';


function ToolInformation({
    name = 'Tool',
    iconSrc = undefined,
    color: bgColor = '#494949'
}) {
    const styles = {
        backgroundColor: bgColor
    };

    return (
        <div className='tool-information'>
            <div className='tool-information__div' style={styles}>
                <Paragraph text={name} />
            </div>
            <div className='tool-information__div'>
                <Paragraph text={'\u00a0'} />
                <div className='tool-information__div--logo'>
                    <Icon src={iconSrc} size='small' />
                </div>
                <SceneStarsUniverse />
            </div>
        </div>
    );
}


export { ToolInformation };
