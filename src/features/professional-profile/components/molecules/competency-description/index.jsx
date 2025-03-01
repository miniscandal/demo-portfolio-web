import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ANIME_NAKANO_ITSUKI_CARD_ANIMATION } from '@shared-atoms/pixel-art/variants';

import './style.css';


function CompetencyDescription({
    pixelArtCharacter = PIXEL_ART_ANIME_NAKANO_ITSUKI_CARD_ANIMATION,
    text = undefined
}) {

    return (
        <div className='competency-description'>
            <div className='competency-description__div'>
                <div className='competency-description__div--pixel-art'>
                    <PixelArt character={pixelArtCharacter} />
                </div>
            </div>
            <div className='competency-description__div'>
                <Paragraph text={text} />
            </div>
        </div>
    );
}

export { CompetencyDescription };
