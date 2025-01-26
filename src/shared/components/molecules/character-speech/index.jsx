import { MangaDialog } from '@shared-molecules/manga-dialog';

import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ANIME_UMI } from '@shared-atoms/pixel-art/variants';

import './style.css';


function CharacterSpeech({
    texts = ['Main Character Speech', 'mmmmm', 'Secondary Character'],
    character = PIXEL_ART_ANIME_UMI,
}) {
    const mangaDialog = {
        texts,
        speed: 200,
        pauseDuration: 1500,
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
