import { Icon } from '@shared-atoms/icon';

import './style.css';


function ToolBadge({
    iconSrc,
    type = 'hitai-ate'
}) {
    const classList = [
        type
    ];
    const icon = {
        src: iconSrc,
        size: 'semi-regular'
    };


    return (
        <div className={`tool-badge ${classList.join(' ')}`}>
            <div className='tool-badge__div'>
                <Icon {...icon} />
            </div>
        </div>
    );
}

export { ToolBadge };
