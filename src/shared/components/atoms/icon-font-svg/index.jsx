import { KidStar } from './variants';

import './style.css';


function IconFontSvg({
    svg = KidStar,
    color = 'light',
    size = 'regular'
}) {
    const classList = [
        color,
        size
    ];

    return (
        <div className={`icon-font-svg ${classList.join(' ')}`} >
            {svg}
        </div >
    );
}

export { IconFontSvg };
