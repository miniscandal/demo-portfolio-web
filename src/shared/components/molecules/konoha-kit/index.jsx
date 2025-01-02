import { Paragraph } from '@shared-atoms/paragraph';
import { HitaiAte } from '@shared-molecules/hitai-ate';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_PARCHMENT } from '@shared-atoms/pixel-art/variants';

import './style.css';


function KonohaKit({
    name: text = 'Tool',
    iconSrc = undefined,
    color: bgColor = 'lightpink'
}) {
    const styles = {
        backgroundColor: bgColor
    };
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
        <div className='konoha-kit'>
            <div className='konoha-kit__div'>
                <HitaiAte {...hitaiAte} />
            </div>
            <div className='konoha-kit__div'>
                <PixelArt{...pixelArt} />
                <div className='konoha-kit__div--tech-tool' style={styles}>
                    <Paragraph {...paragraph} />
                </div>
            </div>

        </div>
    );
}


export { KonohaKit };
