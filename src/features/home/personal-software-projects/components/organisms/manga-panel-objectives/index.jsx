import { useContext } from 'react';
import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-molecules/pixel-art';

import { PIXEL_ART_ANIME_KURISU } from '@shared-molecules/pixel-art/variants';

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
    const pixelArt = {
        character: PIXEL_ART_ANIME_KURISU,
        showBox: true
    };

    return (
        <section>
            <Title {...title} />
            <PixelArt {...pixelArt} />
            <Paragraph {...paragraph} />
        </section>
    );
}

export { MangaPanelObjectives };
