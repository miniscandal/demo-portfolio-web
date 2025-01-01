import { Paragraph } from '@shared-atoms/paragraph';
import { HitaiAte } from '@shared-molecules/hitai-ate';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_PARCHMENT } from '@shared-atoms/pixel-art/variants';

import './style.css';


function ToolInformationHitaiAte({
    name: text = 'Tool',
    iconSrc = undefined,
    color: bgColor = 'lightpink'
}) {
    const pixelArt = {
        character: PIXEL_ART_ITEM_PARCHMENT
    };
    const hitaiAte = {
        src: iconSrc
    };
    const paragraph = {
        text,
        color: '.dark',
        size: 'semi-regular'
    };

    return (
        <div className='tool-information-hitai-ate'>
            <div>
                <HitaiAte {...hitaiAte} />
            </div>
            <div>
                <PixelArt{...pixelArt} />
                <div className='tool-information-hitai-ate__div' style={{ backgroundColor: bgColor }}>
                    <Paragraph {...paragraph} />
                </div>
            </div>

        </div>
    );
}


export { ToolInformationHitaiAte };
