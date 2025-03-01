import { PIXEL_ART_ANIME_UMI_ANIMATION } from './variants';

import './style.css';


function PixelArt({
    character = PIXEL_ART_ANIME_UMI_ANIMATION,
    size = 'regular',
    showBox = false
}) {
    const classList = [
        `art-${character}`,
        showBox ? 'show-box' : '',
        size,
    ];

    return (
        <div className={`pixel-art ${classList.join(' ')}`}>
            <div className={character}></div>
        </div>
    );
}

export { PixelArt };
