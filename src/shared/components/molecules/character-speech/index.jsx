import { MangaDialog } from '@shared-molecules/manga-dialog';

import { PixelArt } from '@shared-atoms/pixel-art';

import './style.css';


function CharacterSpeech({
    messages = undefined,
    character = undefined,
}) {

    return (
        <section className='character-speech'>
            <MangaDialog messages={messages} speed={100} pauseDuration={2000} />
            <PixelArt character={character} size='regular' />
        </section>
    );
}

export { CharacterSpeech };
