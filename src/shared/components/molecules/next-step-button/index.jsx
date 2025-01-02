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
    const paragraph = {
        text,
        color: 'light'
    };
    const iconFontSvg = {
        svg: ArrowDown,
        color: 'olive-green',
        size: 'small'
    };

    return (
        <div className={`next-step-button ${classList.join(' ')}`}>
            <div className='next-step-button__div'>
                <Paragraph {...paragraph} />
            </div>
            <div className='next-step-button__div'>
                <IconFontSvg {...iconFontSvg} />
            </div>
        </div>
    );
}

export { NextStepButton };
