import { Paragraph } from '@shared-atoms/paragraph';

import { SliderControl } from '@feat-about-me-molecules/slider-control';

import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_DIALOG_VERTICAL } from '@shared-atoms/pixel-art/variants';

import './style.css';


function SliderDialog({
    textMain = 'Pixel Art Dialog Main',
    textSecondary = 'Pixel Art Dialog Secondary'
}) {
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
                <PixelArt character={PIXEL_ART_ITEM_DIALOG_VERTICAL} />
                <div className='slider-dialog__div--texts'>
                    <Paragraph text={textMain} color='dark' />
                    <Paragraph text={textSecondary} color='dark' />
                </div>
            </div>
        </div>
    );
}

export { SliderDialog };
