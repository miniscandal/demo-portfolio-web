import { PixelArt } from '@shared-atoms/pixel-art';
import { Paragraph } from '@shared-atoms/paragraph';

import { PIXEL_ART_ITEM_DIALOG } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_UMI } from '@shared-atoms/pixel-art/variants';

import './style.css';


function PixelArtDialog({
    textMain = 'Pixel Art Dialog Main',
    textSecondary = 'Pixel Art Dialog Secondary',
    character = PIXEL_ART_ANIME_UMI
}) {
    const paragraphOne = {
        text: textMain,
        color: 'dark'
    };
    const paragraphTwo = {
        text: textSecondary,
        color: 'dark'
    };
    const pixelArtCharacter = {
        character
    };
    const pixelArtItem = {
        character: PIXEL_ART_ITEM_DIALOG
    };


    return (
        <section className='pixel-art-dialog'>
            <div className='pixel-art-dialog__div'>
                <PixelArt {...pixelArtItem} />
                <div className='pixel-art-dialog__div--texts'>
                    <Paragraph {...paragraphOne} />
                    <br />
                    <Paragraph {...paragraphTwo} />
                </div>
            </div>
            <PixelArt {...pixelArtCharacter} />
        </section>
    );
}

export { PixelArtDialog };
