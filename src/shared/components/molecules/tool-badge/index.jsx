import { Icon } from '@shared-atoms/icon';
import { IconFontSvg } from '@shared-atoms/icon-font-svg';

import './style.css';


function ToolBadge({
    iconSrc,
    currentColor = undefined
}) {

    return (
        <div className='tool-badge'>
            <div className='tool-badge__div'>
                {
                    iconSrc ? <Icon src={iconSrc} size='semi-regular' /> : <IconFontSvg size='semi-regular' currentColor={currentColor} />
                }
            </div>
        </div>
    );
}

export { ToolBadge };
