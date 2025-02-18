import { Icon } from '@shared-atoms/icon';
import { IconFontSvg } from '@shared-atoms/icon-font-svg';

import './style.css';


function ToolBadge({
    iconSrc,
    color = undefined
}) {

    return (
        <div className='tool-badge'>
            <div className='tool-badge__div'>
                {
                    iconSrc ? <Icon src={iconSrc} size='semi-regular' /> : <IconFontSvg size='semi-regular' color={color} />
                }
            </div>
        </div>
    );
}

export { ToolBadge };
