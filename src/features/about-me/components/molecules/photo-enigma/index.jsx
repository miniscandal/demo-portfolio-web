import { Image } from '@shared-atoms/image';

import photo from '@assets-images/photo-me/my-photo-03.png';

import './style.css';


function PhotoEnigma({
    hidden = true
}) {
    const classList = [
        hidden ? 'hidden' : ''
    ];
    const image = {
        src: photo,
        size: 'my-photo'
    };


    return (
        <div className={`photo-enigma ${classList.join(' ')}`}>
            <Image {...image} />
        </div>
    );
}

export { PhotoEnigma };
