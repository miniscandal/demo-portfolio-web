import { PixelArt } from '@shared-atoms/pixel-art';
import { Paragraph } from '@shared-atoms/paragraph';

import { SliderControl } from '@feat-about-me-molecules/slider-control';

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
    const sliderControl = {
        sliderOptions: [
            {
                id: 'paragraph-main',
                name: ''
            },
            {
                id: 'paragraph-secondary',
                name: ''
            }
        ],
        selectDefault: 'paragraph-main',
        itemWithCheckBoxOnly: true
    };


    return (
        <section className='pixel-art-dialog'>
            <div className='pixel-art-dialog__div--dialog'>
                <div className='pixel-art-dialog__div--control'>
                    <SliderControl {...sliderControl} />
                </div>
                <div className='pixel-art-dialog__div--content'>
                    <PixelArt {...pixelArtItem} />
                    <div className='pixel-art-dialog__div--texts'>
                        <Paragraph {...paragraphOne} />
                        <br />
                        <Paragraph {...paragraphTwo} />
                    </div>
                </div>
            </div>
            <PixelArt {...pixelArtCharacter} />
        </section>
    );
}

export { PixelArtDialog };
