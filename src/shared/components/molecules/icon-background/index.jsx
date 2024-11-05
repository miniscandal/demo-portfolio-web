import { Icon } from '@shared-atoms/icon';

import svgTool from '@assets-images/svg/tool.svg';

import './style.css';


function IconBackground({ src = svgTool, size = 'regular' }) {
    const icon = {
        src,
        size: 'small'
    };

    return (
        <div className={`icon-background ${size}`}>
            <Icon {...icon} />
        </div>
    );
}

export { IconBackground };
