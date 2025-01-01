import { Title } from '@shared-atoms/title';
import { Paragraph } from '@shared-atoms/paragraph';
import { IconFontSvg } from '@shared-atoms/icon-font-svg';
import { PixelArt } from '@shared-atoms/pixel-art';
import { PIXEL_ART_ANIME_ITSUKI_NAKANO_CARD } from '@shared-atoms/pixel-art/variants';

import './style.css';


function CompetencyDescription({
    name = 'competency description',
    description = undefined,
    iconFontSvg = undefined,
    pixelArtCharacter = PIXEL_ART_ANIME_ITSUKI_NAKANO_CARD
}) {
    const pixelArt = {
        character: pixelArtCharacter,
        showBox: false
    };
    const iconSvgFont = {
        svg: iconFontSvg,
        color: 'olive-green',
        size: 'regular'
    };
    const title = {
        text: name,
        type: 'h3',
        color: 'sky-blue'
    };
    const paragraph = {
        text: description,
        color: 'charcoal-grey'
    };

    return (
        <section className='competency-description'>
            <div>
                <IconFontSvg {...iconSvgFont} />
                <Title {...title} />
            </div>
            <div>
                <PixelArt {...pixelArt} />
                <Paragraph {...paragraph} />
            </div>
        </section>
    );
}

export { CompetencyDescription };
