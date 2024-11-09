import { Paragraph } from '@shared-atoms/paragraph';
import { MangaDialog } from '@shared-molecules/manga-dialog';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_UMI_REGULAR } from '@shared-constants/pixel-art-characters';


import './style.css';


function PixelArtCharacterDialog({ size = 'regular' }) {
    const mangaDialog = {
        text: 'Hello World!',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    };
    const pixelArtCharacter = {
        text: 'Hello World!',
        character: PIXEL_ART_ANIME_UMI_REGULAR,
        size: 'small',
        showContainer: true
    };

    return (
        <section className={`pixel-art-character-dialog ${size}`}>
            <MangaDialog {...mangaDialog} />
            <div className='pixel-art'>
                <PixelArtCharacter {...pixelArtCharacter} />
            </div>
        </section>
    );
}

export { PixelArtCharacterDialog };
