import { Title } from '@shared-atoms/title';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ANIME_KOMI } from '@shared-atoms/pixel-art/variants';


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
            <PixelArt {...pixelArt} />
        </section>
    );
}

export { MangaPanelProjectAppliedConcepts };
