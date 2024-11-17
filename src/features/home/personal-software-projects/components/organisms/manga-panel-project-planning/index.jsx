import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_KANAO } from '@shared-constants/pixel-art-characters';
import { PIXEL_ART_ITEM_WHITEBOARD } from '@shared-constants/pixel-art-characters';

import './style.css';


function MangaPanelProjectPlanning() {
    const { name, descriptionEnglish } = useContext(MangaContext);

    const title = {
        text: 'Project Planning',
        color: 'smoky-purple',
        type: 'h4'
    };
    const pixelArtCharacter = {
        character: PIXEL_ART_ANIME_KANAO,
        showBox: !false
    };
    const pixelArtItem = {
        character: PIXEL_ART_ITEM_WHITEBOARD,
        showBox: true
    };

    return (
        <section>
            <Title {...title} />
            <PixelArtCharacter {...pixelArtItem} />
            <PixelArtCharacter {...pixelArtCharacter} />
        </section>
    );
}

export { MangaPanelProjectPlanning };
