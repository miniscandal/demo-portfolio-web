import { ProfessionalInformation } from '@feat-main-header-molecules/professional-information';

import { ProfessionalContact } from '@shared-organisms/professional-contact';
import { CharacterSpeech } from '@shared-molecules/character-speech';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V1 } from '@shared-atoms/pixel-art/variants';

import './style.css';


function HeaderProfileData({
    miniMessages
}) {

    return (
        <article className='header-profile-data'>
            <ProfessionalInformation />
            <ProfessionalContact />
            <CharacterSpeech
                messages={miniMessages}
                character={PIXEL_ART_ANIME_MINICODE_ANIMATION_V1}
            />
        </article>
    );
}

export { HeaderProfileData };
