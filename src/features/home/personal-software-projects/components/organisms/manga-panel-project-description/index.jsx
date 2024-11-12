import { useContext } from 'react';
import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_RINTARO } from '@shared-constants/pixel-art-characters';

import './style.css';


function MangaPanelProjectDescription() {
    const { projectData: { name, descriptionEnglish } } = useContext(MangaContext);
    const title = {
        text: name,
        color: 'smoky-purple',
        type: 'h3'
    };
    const paragraph = {
        text: descriptionEnglish,
        color: 'charcoal-grey'
    };
    const pixelArtCharacter = {
        character: PIXEL_ART_ANIME_RINTARO,
        showContainer: false
    }

    return (
        <section className='manga-panel-project-description'>
            <Title {...title} />
            <Paragraph {...paragraph} />
            <PixelArtCharacter {...pixelArtCharacter} />
        </section>
    );
}

export { MangaPanelProjectDescription };
