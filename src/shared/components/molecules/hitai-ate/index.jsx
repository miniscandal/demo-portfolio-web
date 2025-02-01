import { PixelArt } from '@shared-atoms/pixel-art';
import { ToolBadge } from '@shared-molecules/tool-badge';

import { PIXEL_ART_ITEM_HITAI_ATE } from '@shared-atoms/pixel-art/variants';

import './style.css';


function HitaiAte({
    src = undefined,
    currentColor = undefined
}) {

    return (
        <div className='hitai-ate'>
            <PixelArt character={PIXEL_ART_ITEM_HITAI_ATE} />
            <div className='hitai-ate__div'>
                <ToolBadge iconSrc={src} currentColor={currentColor} />
            </div>
        </div>
    );
}

export { HitaiAte };
