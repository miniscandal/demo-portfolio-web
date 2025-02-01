import { Cat } from './variants';

import './style.css';


function IconFontSvg({
    svg = Cat,
    color = 'light',
    size = 'regular',
    currentColor = undefined
}) {
    const classList = [
        size,
        currentColor ? '' : color
    ];
    const style = {
        color: currentColor || ''
    };

    return (
        <div className={`icon-font-svg ${classList.join(' ')}`} style={style}>
            {svg}
        </div>
    );
}

export { IconFontSvg };
