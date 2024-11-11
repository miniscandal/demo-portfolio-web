import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_RINTARO } from '@shared-constants/pixel-art-characters';

import './style.css';


function MangaPanelAppliedConcepts() {
    const title = {
        text: 'Applied Concepts',
        color: 'smoky-purple',
        type: 'h4'
    };

    return (
        <section>
            <Title {...title} />
        </section>
    );
}

export { MangaPanelAppliedConcepts };
