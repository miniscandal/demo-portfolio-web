import { KidStar } from './variants';

import './style.css';


function IconFontSvg({
    svg = KidStar,
    color = 'darkgray',
    size = 'regular'
}) {
    const classList = [
        size
    ];
    const style = {
        color
    };

    return (
        <div className={`icon-font-svg ${classList.join(' ')}`} style={style}>
            {svg}
        </div>
    );
}

export { IconFontSvg };
