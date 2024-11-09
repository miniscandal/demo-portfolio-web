import image from '@assets-images/photo-me/anime-1.jpg';

import './style.css';


function Image({ src = image, size = 'regular', objectFit = 'none' }) {

    return (
        <div className={`image ${size} ${objectFit}`}>
            <img src={src} />
        </div>
    );
}

export { Image };
