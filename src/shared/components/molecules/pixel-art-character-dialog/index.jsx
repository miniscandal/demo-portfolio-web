import { MangaDialog } from '@shared-molecules/manga-dialog';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_UMI } from '@shared-constants/pixel-art-characters';

import './style.css';


function PixelArtCharacterDialog({
    text = 'Pixel art character dialog',
    character = PIXEL_ART_ANIME_UMI
}) {
    const mangaDialog = {
        text
    };
    const pixelArtCharacter = {
        character,
        size: 'small'
    };

    return (
        <section className='pixel-art-character-dialog'>
            <MangaDialog {...mangaDialog} />
            <div>
                <PixelArtCharacter {...pixelArtCharacter} />
            </div>
        </section>
    );
}

export { PixelArtCharacterDialog };
