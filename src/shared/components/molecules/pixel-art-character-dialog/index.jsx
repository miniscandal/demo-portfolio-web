import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_UMI_REGULAR } from '@shared-constants/pixel-art-characters';


import './style.css';


function PixelArtCharacterDialog() {
    const paragraph = {
        text: 'Hello World!',
        cursorAnimation: true,
        color: 'dark',
    };
    const pixelArtCharacter = {
        character: PIXEL_ART_ANIME_UMI_REGULAR,
        size: 'large',
        showContainer: false
    }

    return (
        <section className='pixel-art-character-dialog'>
            <Paragraph {...paragraph} />
            <PixelArtCharacter {...pixelArtCharacter} />
        </section>
    );
}

export { PixelArtCharacterDialog };
