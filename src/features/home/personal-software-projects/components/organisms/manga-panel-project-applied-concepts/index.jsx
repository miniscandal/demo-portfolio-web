import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_KOMI } from '@shared-constants/pixel-art-characters';


import './style.css';


function MangaPanelProjectAppliedConcepts() {
    const title = {
        text: 'Applied Concepts',
        color: 'smoky-purple',
        type: 'h4'
    };
    const pixelArt = {
        character: PIXEL_ART_ANIME_KOMI,
        showBox: true
    };

    return (
        <section>
            <Title {...title} />
            <PixelArtCharacter {...pixelArt} />
        </section>
    );
}

export { MangaPanelProjectAppliedConcepts };
