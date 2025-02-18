import { Cat } from './variants';

import './style.css';


function IconFontSvg({
    svg = Cat,
    color = 'gray',
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
