import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_PARCHMENT } from '@shared-atoms/pixel-art/variants';

import './style.css';


function ParchmentToolName({
    text = 'Parchment Tool Name',
    bgColor = 'lightpink'
}) {
    const styles = {
        backgroundColor: bgColor
    };
    const pixelArt = {
        character: PIXEL_ART_ITEM_PARCHMENT
    };
    const paragraph = {
        text
    };


    return (
        <div className='parchment-tool-name'>
            <PixelArt{...pixelArt} />
            <div className='parchment-tool-name__div' style={styles}>
                <Paragraph {...paragraph} />
            </div>
        </div>
    );
}

export { ParchmentToolName };
