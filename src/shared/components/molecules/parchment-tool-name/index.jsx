import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-atoms/pixel-art';
import { ToolBadge } from '@shared-molecules/tool-badge';

import { PIXEL_ART_ITEM_PARCHMENT } from '@shared-atoms/pixel-art/variants';

import './style.css';


function ParchmentToolName({
    name: text = 'Name',
    bgColor = 'lightpink',
    iconSrc = undefined
}) {
    const classList = [
        iconSrc ? 'with-tool-badge' : ''
    ];
    const styles = {
        backgroundColor: bgColor
    };
    const pixelArt = {
        character: PIXEL_ART_ITEM_PARCHMENT,
        size: iconSrc ? 'medium' : 'regular'
    };
    const paragraph = {
        text,
        size: 'middle'
    };
    const toolBadge = {
        iconSrc
    };


    return (
        <div className={`parchment-tool-name ${classList.join(' ')}`}>
            <PixelArt{...pixelArt} />
            <div className='parchment-tool-name__div' style={styles}>
                {
                    iconSrc && <ToolBadge {...toolBadge} />
                }
                <div className='parchment-tool-name__div--name'>
                    <Paragraph {...paragraph} />
                </div>
            </div>
        </div>
    );
}

export { ParchmentToolName };
