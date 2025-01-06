import { Icon } from '@shared-atoms/icon';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_HITAI_ATE } from '@shared-atoms/pixel-art/variants';

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
                <div className='hitai-ate__div-symbol'>
                    <Icon {...icon} />
                </div>
            </div>
        </div>
    );
}

export { HitaiAte };
