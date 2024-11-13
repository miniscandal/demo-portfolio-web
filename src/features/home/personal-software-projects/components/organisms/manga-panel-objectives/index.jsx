import { useContext } from 'react';
import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_RINTARO } from '@shared-constants/pixel-art-characters';

import './style.css';


function MangaPanelObjectives() {
    const { projectData: { objectives } } = useContext(MangaContext)
    const title = {
        text: 'Project Objectives',
        color: 'smoky-purple',
        type: 'h3'
    };
    const paragraph = {
        text: objectives.technical,
        color: 'charcoal-grey'
    };
    const pixelArtCharacter = {
        character: PIXEL_ART_ANIME_RINTARO,
        showContainer: false
    }

    return (
        <section>
            <Title {...title} />
            <PixelArtCharacter {...pixelArtCharacter} />
            <Paragraph {...paragraph} />
        </section>
    );
}

export { MangaPanelObjectives };
