import { PIXEL_ART_ANIME_UMI } from '@shared-constants/pixel-art-characters';

import './style.css';


function PixelArtCharacter({
    character = PIXEL_ART_ANIME_UMI,
    size = 'regular',
    showBox = false
}) {
    const classList = [
        `art-${character}`,
        showBox ? 'show-box' : '',
        size,
    ];

    return (
        <div className={`pixel-art-character ${classList.join(' ')}`}>
            <div className={character}></div>
        </div>
    );
}

export { PixelArtCharacter };
