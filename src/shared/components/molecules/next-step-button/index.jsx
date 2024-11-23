import { Paragraph } from '@shared-atoms/paragraph';
import { IconFontSvg } from '@shared-atoms/icon-font-svg';

import { ArrowDown } from '@shared-atoms/icon-font-svg/variants';

import './style.css';

function NextStepButton({
    text = 'Next Step',
    size = 'regular'
}) {
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
        <div className={`next-step-button ${size}`}>
            <div>
                <div className='paragraph__div'>
                    <Paragraph {...paragraph} />
                </div>
                <div className='icon-font-svg__div'>
                    <IconFontSvg {...iconFontSvg} />
                </div>
            </div>
        </div>
    );
}

export { NextStepButton };
