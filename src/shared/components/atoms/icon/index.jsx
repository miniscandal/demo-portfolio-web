import documentation from '@assets-images/svg/documentation.svg';

import './style.css';


function Icon({
    src = documentation,
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
