import { ProfessionalInformation } from '@feat-main-header-molecules/professional-information';

import { PixelArt } from '@shared-atoms/pixel-art';
import { ProfessionalContact } from '@shared-organisms/professional-contact';
import { TypingDialogueSegmentLooping } from '@shared-molecules/typing-dialogue-segment';

import { PIXEL_ART_ANIME_MINIDEV_V2_ANIMATION } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_DESK_ANIMATION } from '@shared-atoms/pixel-art/variants';

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
            <div className='header-profile-data__div'>
                <TypingDialogueSegmentLooping messages={miniMessages} />
                <div className='header-profile-data__pixel-art'>
                    <PixelArt character={PIXEL_ART_ITEM_DESK_ANIMATION} size='regular' />
                    <PixelArt character={PIXEL_ART_ANIME_MINIDEV_V2_ANIMATION} size='regular' />
                </div>
            </div>
        </article>
    );
}

export { HeaderProfileData };
