import iconSrc from '@assets-images/svg/github.svg';

import './style.css';


function Icon({
    src = iconSrc,
    size = 'regular'
}) {

    return (
        <div className={`icon ${size}`}>
            <img src={src} />
        </div>
    );
}

export { Icon };
