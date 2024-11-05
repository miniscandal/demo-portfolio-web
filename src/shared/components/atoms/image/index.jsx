import image from '@assets-images/solid/anime-1.jpg';

import './style.css';


function Image({ src = image, size = 'regular', objectFit = 'none' }) {

    return (
        <div className={`image ${size} ${objectFit}`}>
            <img src={src} />
        </div>
    );
}

export { Image };
