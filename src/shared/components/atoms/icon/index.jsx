import iconSrc from '@assets-images/svg/c++.svg';

import './style.css';


function Icon({
    src = iconSrc,
    color = 'light',
    size = 'regular',
    backgroundColor = false
}) {
    const classList = [
        color,
        size,
        backgroundColor ? 'background-color' : ''
    ];

    return (
        <div className={`icon ${classList.join(' ')}`}>
            <img src={src} />
        </div>
    );
}

export { Icon };
