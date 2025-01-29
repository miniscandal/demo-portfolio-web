import { Paragraph } from '@shared-atoms/paragraph';

import { SliderControl } from '@feat-about-me-molecules/slider-control';

import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_DIALOG_VERTICAL } from '@shared-atoms/pixel-art/variants';

import './style.css';


function SliderDialog({
    textMain = 'Pixel Art Dialog Main',
    textSecondary = 'Pixel Art Dialog Secondary'
}) {
    const paragraphOne = {
        text: textMain,
        color: 'dark'
    };
    const paragraphTwo = {
        text: textSecondary,
        color: 'dark'
    };

    const pixelArtItem = {
        character: PIXEL_ART_ITEM_DIALOG_VERTICAL
    };
    const sliderControl = {
        selectionOptions: [
            {
                htmlFor: 'paragraph-main'
            },
            {
                htmlFor: 'paragraph-secondary'
            }
        ],
        defaultSelectionOption: 'paragraph-main'
    };

    return (
        <div className='slider-dialog'>
            <div className='slider-dialog__div'>
                <SliderControl {...sliderControl} />
            </div>
            <div className='slider-dialog__div'>
                <PixelArt {...pixelArtItem} />
                <div className='slider-dialog__div--texts'>
                    <Paragraph {...paragraphOne} />
                    <Paragraph {...paragraphTwo} />
                </div>
            </div>
        </div>
    );
}

export { SliderDialog };
