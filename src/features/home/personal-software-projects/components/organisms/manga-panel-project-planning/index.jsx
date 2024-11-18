import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { PixelArt } from '@shared-molecules/pixel-art';

import { PIXEL_ART_ANIME_KANAO } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ITEM_WHITEBOARD } from '@shared-molecules/pixel-art/variants';

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
            <PixelArt {...pixelArtItem} />
            <PixelArt {...pixelArtCharacter} />
        </section>
    );
}

export { MangaPanelProjectPlanning };
