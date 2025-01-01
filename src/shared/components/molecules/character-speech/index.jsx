import { MangaDialog } from '@shared-molecules/manga-dialog';

import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ANIME_UMI } from '@shared-atoms/pixel-art/variants';

import './style.css';


function CharacterSpeech({
    text = 'Character Speech',
    character = PIXEL_ART_ANIME_UMI,
    animateText = false
}) {
    const mangaDialog = {
        text,
        animateText
    };
    const pixelArt = {
        character,
        size: 'regular'
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
