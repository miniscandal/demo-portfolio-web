import { Icon } from '@shared-atoms/icon';
import { IconFontSvg } from '@shared-atoms/icon-font-svg';

import { Cat } from '@shared-atoms/icon-font-svg/variants';

import './style.css';


function ToolBadge({
    iconSrc,
    type = 'hitai-ate',
    color = undefined
}) {
    const classList = [
        type
    ];
    const icon = {
        src: iconSrc,
        size: 'semi-regular'
    };
    const iconFontSvg = {
        svg: Cat,
        color
    };


    return (
        <div className={`tool-badge ${classList.join(' ')}`}>
            <div className='tool-badge__div'>
                {
                    iconSrc ? <Icon {...icon} /> : <IconFontSvg {...iconFontSvg} />
                }
            </div>
        </div>
    );
}

export { ToolBadge };
