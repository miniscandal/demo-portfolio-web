import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-atoms/pixel-art';
import { ToolBadge } from '@shared-molecules/tool-badge';

import { PIXEL_ART_ITEM_ANIME_PARCHMENT } from '@shared-atoms/pixel-art/variants';

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


    return (
        <div className={`parchment-tool-name ${classList.join(' ')}`}>
            <PixelArt character={PIXEL_ART_ITEM_ANIME_PARCHMENT} />
            <div className='parchment-tool-name__div' style={styles}>
                {
                    iconSrc && <ToolBadge iconSrc={iconSrc} color={bgColor} />
                }
                <div className='parchment-tool-name__div--name'>
                    <Paragraph text={text} size='middle' />
                </div>
            </div>
        </div>
    );
}

export { ParchmentToolName };
