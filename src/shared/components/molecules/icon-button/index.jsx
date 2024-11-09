import { IconFontSvg } from '@shared-atoms/icon-font-svg';

import { Terminal } from '@shared-atoms/icon-font-svg/variants';

import './style.css';


function IconButton({
    size = 'regular',
    svg = Terminal,
    handleClick = () => { }
}) {
    const iconFontSvg = {
        svg,
        color: 'charcoal-grey',
        size: 'medium'
    };

    return (
        <button className={`icon-button ${size}`} onClick={handleClick}>
            <IconFontSvg {...iconFontSvg} />
        </button>
    );
}

export { IconButton };
