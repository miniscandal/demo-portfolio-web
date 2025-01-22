import { PixelArt } from '@shared-atoms/pixel-art';

import { SliderDialog } from '@feat-about-me-molecules/slider-pixel-art-dialog';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V2 } from '@shared-atoms/pixel-art/variants';

import './style.css';


function PixelArtDialog({
    textMain = 'Pixel Art Dialog Main',
    textSecondary = 'Pixel Art Dialog Secondary',
    character = PIXEL_ART_ANIME_MINICODE_ANIMATION_V2
}) {
    const sliderDialog = {
        textMain,
        textSecondary
    };
    const pixelArtCharacter = {
        character
    };


    return (
        <section className='pixel-art-dialog'>
            <div className='pixel-art-dialog__div'>
                <SliderDialog {...sliderDialog} />
            </div>
            <PixelArt {...pixelArtCharacter} />
        </section>
    );
}

export { PixelArtDialog };
