import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';

import { CharacterSpeech } from '@shared-molecules/character-speech';

import { PIXEL_ART_ANIME_RINTARO } from '@shared-constants/pixel-art-characters';

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

    return (
        <section className='manga-panel-project-description'>
            <Title {...title} />
            <CharacterSpeech {...characterSpeech} />
        </section>
    );
}

export { MangaPanelProjectDescription };
