import { Paragraph } from '@shared-atoms/paragraph';
import { IconFontSvg } from '@shared-atoms/icon-font-svg';

import { ArrowDown } from '@shared-atoms/icon-font-svg/variants';

import './style.css';

function NextStepButton({
    text = 'Next Step',
    size = 'regular'
}) {
    const classList = [
        size
    ];

    return (
        <div className={`next-step-button ${classList.join(' ')}`}>
            <Paragraph text={text} color='light' />
            <div className='next-step-button__div'>
                <IconFontSvg svg={ArrowDown} color='olive-green' size='small' />
            </div>
        </div>
    );
}

export { NextStepButton };
