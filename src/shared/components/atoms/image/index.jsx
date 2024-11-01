import image from '@assets-images/solid/anime-1.jpg';

import './style.css';


function Image({ src = image, size = 'regular', objectFit = 'fill' }) {
    const classList = [
        size,
        objectFit
    ];

    return (
        <div className={`image ${classList.join(' ')}`}>
            <img src={src} />
        </div>
    );
}

export { Image };
