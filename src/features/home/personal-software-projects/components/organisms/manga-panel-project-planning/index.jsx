import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_HINATA } from '@shared-constants/pixel-art-characters';

import './style.css';


function MangaPanelProjectPlanning() {
    const { name, descriptionEnglish } = useContext(MangaContext);

    const title = {
        text: 'Project Planning',
        color: 'smoky-purple',
        type: 'h4'
    };
    const pixelArtCharacter = {
        character: PIXEL_ART_ANIME_HINATA,
        showContainer: !false
    };

    return (
        <section>
            <Title {...title} />
            <PixelArtCharacter {...pixelArtCharacter} />
        </section>
    );
}

export { MangaPanelProjectPlanning };
