import { useContext } from 'react';

import { MiniMessagesContext } from 'features/main-header/contexts/mini-messages';

import { ProfessionalInformation } from 'features/main-header/components/molecules/professional-information';
import { ChessboardNav } from 'features/main-header/components/organisms/chessboard-nav';

import { CharacterSpeech } from '@shared-molecules/character-speech';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V1 } from '@shared-atoms/pixel-art/variants';

import './style.css';


function HeaderContent() {
    const { miniMessages } = useContext(MiniMessagesContext);


    return (
        <div className='header-content'>
            <section className='header-content__section'>
                <ProfessionalInformation />
                <ProfessionalContact />
                <div className='header-content__section--div'>
                    <CharacterSpeech
                        messages={miniMessages}
                        character={PIXEL_ART_ANIME_MINICODE_ANIMATION_V1}
                    />
                </div>
            </section>
            <nav>
                <ChessboardNav />
            </nav>
        </div>
    );
}

export { HeaderContent };
