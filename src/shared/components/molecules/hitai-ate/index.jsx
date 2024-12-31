import { Icon } from '@shared-atoms/icon';
import { PixelArt } from '@shared-molecules/pixel-art';

import { PIXEL_ART_ITEM_HITAI_ATE } from '@shared-molecules/pixel-art/variants';

import './style.css';


function HitaiAte({
    src = undefined
}) {
    const pixelArt = {
        character: PIXEL_ART_ITEM_HITAI_ATE
    };
    const icon = {
        src,
        size: 'semi-regular'
    };


    return (
        <div className='hitai-ate'>
            <PixelArt {...pixelArt} />
            <div className='hitai-ate__div'>
                <div>
                    <Icon {...icon} />
                </div>
            </div>
        </div>
    );
}

export { HitaiAte };
