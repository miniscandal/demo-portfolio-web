import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_PARCHMENT } from '@shared-atoms/pixel-art/variants';

import './style.css';


function ParchmentName({
    text = 'Parchment Name',
    bgColor = 'lightpink'
}) {
    const styles = {
        backgroundColor: bgColor
    };
    const pixelArt = {
        character: PIXEL_ART_ITEM_PARCHMENT
    };
    const paragraph = {
        text,
        color: '.dark',
        size: 'semi-regular'
    };


    return (
        <div className='parchment-name'>
            <PixelArt{...pixelArt} />
            <div className='parchment-name__div' style={styles}>
                <Paragraph {...paragraph} />
            </div>
        </div>
    );
}

export { ParchmentName };
