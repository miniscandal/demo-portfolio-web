import { PixelArt } from '@shared-atoms/pixel-art';
import { Paragraph } from '@shared-atoms/paragraph';

import { PIXEL_ART_ITEM_DIALOG } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_UMI } from '@shared-atoms/pixel-art/variants';

import './style.css';


function PixelArtDialog8Bit({
    textMain = 'pixel art dialog 8 bit',
    textSecondary = 'pixel art dialog 8 bit',
    character = PIXEL_ART_ANIME_UMI
}) {
    const paragraphOne = {
        text: textMain
    };
    const paragraphTwo = {
        text: textSecondary
    };
    const pixelArtCharacter = {
        character
    };
    const pixelArtItem = {
        character: PIXEL_ART_ITEM_DIALOG
    };


    return (
        <section className='pixel-art-dialog-8-bit'>
            <div className='pixel-art-dialog-8-bit__div'>
                <PixelArt {...pixelArtCharacter} />
            </div>
            <div className='pixel-art-dialog-8-bit__div'>
                <PixelArt {...pixelArtItem} />
                <div className='pixel-art-dialog-8-bit__div--paragraph'>
                    <Paragraph {...paragraphOne} />
                    <Paragraph {...paragraphTwo} />
                </div>
            </div>
        </section>
    );
}

export { PixelArtDialog8Bit };
