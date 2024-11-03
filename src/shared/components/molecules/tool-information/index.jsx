import { Icon } from '@shared-atoms/icon';
import svgTool from '@assets-images/svg/tool.svg';

import './style.css';


function ToolInformation({
    name: text = 'Tool',
    iconSrc: src = svgTool,
    color: bgColor = 'lightpink'
}) {
    const icon = {
        src,
        size: 'regular',
        backgroundColor: true
    };

    return (
        <a className='tool-information'>
            <div>
                <Icon {...icon} />
            </div>
            <div style={{ backgroundColor: bgColor }}>
                {text}
            </div>
        </a >
    );
}


export { ToolInformation };
