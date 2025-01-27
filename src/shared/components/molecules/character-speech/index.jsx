import { MangaDialog } from '@shared-molecules/manga-dialog';

import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ANIME_UMI } from '@shared-atoms/pixel-art/variants';

import './style.css';


function CharacterSpeech({
    texts = ['Character Speech'],
    character = PIXEL_ART_ANIME_UMI,
}) {
    const mangaDialog = {
        texts,
        speed: 100,
        pauseDuration: 2000,
    };
    const pixelArt = {
        character,
        size: 'regular'
    };

    return (
        <section className='character-speech'>
            <MangaDialog {...mangaDialog} />
            <PixelArt {...pixelArt} />
        </section>
    );
}

export { CharacterSpeech };
