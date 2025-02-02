import { CompetencyDescription } from '@feat-professional-profile-molecules/competency-description';
import { CompetencyName } from '@feat-professional-profile-molecules/competency-name';

import { PIXEL_ART_ANIME_ITSUKI_NAKANO_CARD } from '@shared-atoms/pixel-art/variants';

import './style.css';


function CompetencyProfessional({
    name = 'Competency Professional',
    description = undefined,
    iconFontSvg = undefined,
    pixelArtCharacter = PIXEL_ART_ANIME_ITSUKI_NAKANO_CARD
}) {

    return (
        <section className='competency-professional'>
            <CompetencyName name={name} iconFontSvg={iconFontSvg} />
            <CompetencyDescription pixelArtCharacter={pixelArtCharacter} text={description} />
        </section>
    );
}

export { CompetencyProfessional };
