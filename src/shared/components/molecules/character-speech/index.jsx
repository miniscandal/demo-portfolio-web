import { MangaDialog } from '@shared-molecules/manga-dialog';

import { PixelArt } from '@shared-molecules/pixel-art';

import { PIXEL_ART_ANIME_UMI } from '@shared-molecules/pixel-art/variants';

import './style.css';


function CharacterSpeech({
    text = 'Character Speech',
    character = PIXEL_ART_ANIME_UMI
}) {
    const mangaDialog = {
        text
    };
    const pixelArt = {
        character,
        size: 'small',
        showBox: true
    };

    return (
        <section className='character-speech'>
            <div>
                <MangaDialog {...mangaDialog} />
            </div>
            <PixelArt {...pixelArt} />
        </section>
    );
}

export { CharacterSpeech };
