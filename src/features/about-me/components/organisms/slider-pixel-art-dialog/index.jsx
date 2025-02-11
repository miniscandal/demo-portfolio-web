import { UseControlRadioInput } from '@shared-custom-hooks/use-control-radio-input';

import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_DIALOG_VERTICAL } from '@shared-atoms/pixel-art/variants';

import './style.css';


function SliderDialog({
    texts = [
        'Main Slider Dialog',
        'Secondary Slider Dialog'
    ]
}) {
    const { radioInputComponents } = UseControlRadioInput();


    return (
        <div className='slider-dialog'>
            <div className='slider-dialog__div'>
                {radioInputComponents}
            </div>
            <div className='slider-dialog__div'>
                <PixelArt character={PIXEL_ART_ITEM_DIALOG_VERTICAL} />
                <div className='slider-dialog__div--texts'>
                    <Paragraph text={texts[0]} color='dark' />
                    <Paragraph text={texts[1]} color='dark' />
                </div>
            </div>
        </div>
    );
}

export { SliderDialog };
