import iconSrc from '@assets-images/svg/c++.svg';

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
