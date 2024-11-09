import { PIXEL_ART_ANIME_UMI_REGULAR } from '@shared-constants/pixel-art-characters';

import './style.css';


/**
 * The dimension of the elements is calculated using the following ratio: 2rem corresponds to a scale of 0.1.
 * Example:
 * If the main container pixel-art-character has a width and height of 2rem,
 * then the child elements (div) will be scaled using transform: scale(0.1)`, maintaining proportional size.
 */

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
    console.log(size);

    return (
        <div className={`pixel-art-character ${classList.join(' ')}`}>
            <div className={character}></div>
        </div>
    );
}

export { PixelArtCharacter };
