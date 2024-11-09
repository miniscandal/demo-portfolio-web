import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_RINTARO_REGULAR } from '@shared-constants/pixel-art-characters';

import './style.css';


function MiniatureProjectDescription() {
    const title = {
        text: 'Sensor Monitoring',
        color: 'smoky-purple',
        type: 'h3'
    };
    const paragraph = {
        text: 'Real-time display of temperature and humidity information transmitted by sensors for precise and detailed control of the environment.',
        color: 'charcoal-grey'
    };
    const pixelArtCharacter = {
        character: PIXEL_ART_ANIME_RINTARO_REGULAR,
        showContainer: false
    }

    return (
        <section className='miniature-project-description'>
            <Title {...title} />
            <Paragraph {...paragraph} />
            <PixelArtCharacter {...pixelArtCharacter} />
        </section>
    );
}

export { MiniatureProjectDescription };
