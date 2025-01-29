import { PixelArt } from '@shared-atoms/pixel-art';
import { ToolBadge } from '@shared-molecules/tool-badge';

import { PIXEL_ART_ITEM_HITAI_ATE } from '@shared-atoms/pixel-art/variants';

import './style.css';


function HitaiAte({
    src = undefined,
    type = 'hitai-ate',
    color = 'light'
}) {
    const pixelArt = {
        character: PIXEL_ART_ITEM_HITAI_ATE
    };
    const toolBadge = {
        iconSrc: src,
        type,
        color
    };


    return (
        <div className='hitai-ate'>
            <PixelArt {...pixelArt} />
            <div className='hitai-ate__div'>
                <ToolBadge {...toolBadge} />
            </div>
        </div>
    );
}

export { HitaiAte };
