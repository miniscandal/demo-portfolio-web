import { PIXEL_ART_ANIME_UMI } from '@shared-constants/pixel-art-characters';

import './style.css';


function PixelArtCharacter({
    character = PIXEL_ART_ANIME_UMI,
    size = 'regular',
    showContainer = false
}) {
    const classList = [
        `art-${character}`,
        showContainer ? 'show-container' : '',
        size,
    ];

    return (
        <div className={`pixel-art-character ${classList.join(' ')}`}>
            <div className={character}></div>
        </div>
    );
}

export { PixelArtCharacter };
