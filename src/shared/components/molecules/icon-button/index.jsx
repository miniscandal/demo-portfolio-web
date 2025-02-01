import { IconFontSvg } from '@shared-atoms/icon-font-svg';

import './style.css';


function IconButton({
    size = 'regular',
    svg,
    handleClick = () => { }
}) {
    const classList = [
        size
    ];

    return (
        <button className={`icon-button ${classList.join(' ')}`} onClick={handleClick}>
            <IconFontSvg svg={svg} color='charcoal-grey' size='medium' />
        </button>
    );
}

export { IconButton };
