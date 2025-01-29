import { Icon } from '@shared-atoms/icon';
import { IconFontSvg } from '@shared-atoms/icon-font-svg';

import './style.css';


function ToolBadge({
    iconSrc,
    currentColor = undefined
}) {
    const icon = {
        src: iconSrc,
        size: 'semi-regular'
    };
    const iconFontSvg = {
        size: 'semi-regular',
        currentColor
    };


    return (
        <div className='tool-badge'>
            <div className='tool-badge__div'>
                {
                    iconSrc ? <Icon {...icon} /> : <IconFontSvg {...iconFontSvg} />
                }
            </div>
        </div>
    );
}

export { ToolBadge };
