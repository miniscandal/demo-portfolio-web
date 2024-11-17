import { MangaDialog } from '@shared-molecules/manga-dialog';

import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_UMI } from '@shared-constants/pixel-art-characters';

import './style.css';


function CharacterSpeech({
    text = 'Character Speech',
    character = PIXEL_ART_ANIME_UMI
}) {
    const mangaDialog = {
        text
    };
    const pixelArtCharacter = {
        character,
        size: 'small',
        showBox: true
    };

    return (
        <section className='character-speech'>
            <div>
                <MangaDialog {...mangaDialog} />
            </div>
            <PixelArtCharacter {...pixelArtCharacter} />
        </section>
    );
}

export { CharacterSpeech };
