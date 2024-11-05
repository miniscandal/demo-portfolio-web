import { IconBackground } from '@shared-molecules/icon-background';
import svgTool from '@assets-images/svg/tool.svg';

import './style.css';


function ToolInformation({
    name: text = 'Tool',
    iconSrc: src = svgTool,
    color: bgColor = 'lightpink'
}) {
    const iconBackground = {
        src,
        size: 'regular'
    };

    return (
        <a className='tool-information'>
            <IconBackground {...iconBackground} />
            <div style={{ backgroundColor: bgColor }}>
                {text}
            </div>
        </a >
    );
}


export { ToolInformation };
