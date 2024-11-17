import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';

import { CharacterSpeech } from '@shared-molecules/character-speech';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_RINTARO } from '@shared-constants/pixel-art-characters';
import { PIXEL_ART_ITEM_DESK } from '@shared-constants/pixel-art-characters';

import './style.css';


function MangaPanelProjectDescription() {
    const { projectData: { name, description } } = useContext(MangaContext);
    const title = {
        text: name,
        color: 'smoky-purple',
        type: 'h3'
    };
    const characterSpeech = {
        text: description,
        character: PIXEL_ART_ANIME_RINTARO
    };
    const pixelArtItem = {
        character: PIXEL_ART_ITEM_DESK
    };

    return (
        <section className='manga-panel-project-description'>
            <Title {...title} />
            <div>
                <PixelArtCharacter {...pixelArtItem} />
                <CharacterSpeech {...characterSpeech} />
            </div>
        </section>
    );
}

export { MangaPanelProjectDescription };
