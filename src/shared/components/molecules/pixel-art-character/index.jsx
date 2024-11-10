import { PIXEL_ART_ANIME_UMI_REGULAR } from '@shared-constants/pixel-art-characters';

import './style.css';


function PixelArtCharacter({
    character = PIXEL_ART_ANIME_UMI_REGULAR,
    size = 'regular',
    showContainer = true
}) {
    const classList = [
        `art-${character}`,
        showContainer ? 'show-container' : '',
        size
    ];

    return (
        <div className={`pixel-art-character ${classList.join(' ')}`}>
            <div className={character}></div>
        </div>
    );
}

export { PixelArtCharacter };
