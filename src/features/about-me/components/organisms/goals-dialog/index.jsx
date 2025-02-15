import { useContext } from 'react';

import { ContentVisibilityControllerContext } from '@shared-contexts/content-visibility-controller';

import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-atoms/pixel-art';
import { RadioButtonGroup } from '@shared-molecules/radio-button-group';

import { PIXEL_ART_ITEM_DIALOG_VERTICAL } from '@shared-atoms/pixel-art/variants';

import './style.css';


function GoalsDialog({
    texts = [
        'Main Slider Dialog',
        'Secondary Slider Dialog'
    ]
}) {
    const {
        labelData,
        groupName,
        selectDefaultHtmlFor,
        ariaLabel,
        LabelComponent
    } = useContext(ContentVisibilityControllerContext);


    return (
        <div className='goals-dialog'>
            <div className='goals-dialog__div'>
                <RadioButtonGroup
                    labelData={labelData}
                    groupName={groupName}
                    selectDefaultHtmlFor={selectDefaultHtmlFor}
                    ariaLabel={ariaLabel}
                    LabelComponent={LabelComponent}
                />
            </div>
            <div className='goals-dialog__div'>
                <PixelArt character={PIXEL_ART_ITEM_DIALOG_VERTICAL} />
                <div className='goals-dialog__div--texts'>
                    <Paragraph text={texts[0]} color='dark' />
                    <Paragraph text={texts[1]} color='dark' />
                </div>
            </div>
        </div>
    );
}

export { GoalsDialog };
