import { ProfessionalInformation } from '@feat-main-header-molecules/professional-information';

import { ProfessionalContact } from '@shared-organisms/professional-contact';
import { LoopingTypingDialogue } from '@shared-molecules/looping-typing-dialogue';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V1 } from '@shared-atoms/pixel-art/variants';

import './style.css';


function HeaderProfileData({
    miniMessages
}) {

    return (
        <article className='header-profile-data'>
            <div className='header-profile-data__div'>
                <ProfessionalInformation />
                <ProfessionalContact />
            </div>
            <LoopingTypingDialogue
                messages={miniMessages}
                character={PIXEL_ART_ANIME_MINICODE_ANIMATION_V1}
            />
        </article>
    );
}

export { HeaderProfileData };
