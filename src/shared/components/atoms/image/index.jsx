/* eslint-disable react/no-unknown-property */

import './style.css';


function Image({
    src = undefined,
    size = 'regular',
    objectFit = 'none',
    alt = 'image description'
}) {
    const classList = [
        size,
        objectFit
    ];


    return (
        <div className={`image ${classList.join(' ')}`}>
            <img src={src} alt={alt} fetchpriority='high' />
        </div>
    );
}

export { Image };
