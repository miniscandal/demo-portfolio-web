import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ANIME_ITSUKI_NAKANO_CARD } from '@shared-atoms/pixel-art/variants';

import './style.css';


function CompetencyDescription({
    pixelArtCharacter = PIXEL_ART_ANIME_ITSUKI_NAKANO_CARD,
    text = undefined
}) {
    const pixelArt = {
        character: pixelArtCharacter
    };
    const paragraph = {
        text,
        color: 'charcoal-grey'
    };

    return (
        <div className='competency-description'>
            <div className='competency-description__div'>
                <div>
                    <PixelArt {...pixelArt} />
                </div>
            </div>
            <div className='competency-description__div'>
                <Paragraph {...paragraph} />
            </div>
        </div>
    );
}

export { CompetencyDescription };
