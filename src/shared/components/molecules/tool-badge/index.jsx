import { Icon } from '@shared-atoms/icon';

import './style.css';


function ToolBadge({
    iconSrc
}) {
    const icon = {
        src: iconSrc,
        size: 'semi-regular'
    };


    return (
        <div className='tool-badge'>
            <div className='tool-badge__div'>
                <Icon {...icon} />
            </div>
        </div>
    );
}

export { ToolBadge };
