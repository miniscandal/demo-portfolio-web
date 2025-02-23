import { Cat } from './variants';

import './style.css';


function IconFontSvg({
    svg = Cat,
    size = 'regular'
}) {
    const classList = [
        size
    ];


    return (
        <div className={`icon-font-svg ${classList.join(' ')}`}>
            {svg}
        </div>
    );
}

export { IconFontSvg };
