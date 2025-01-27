import { useContext } from 'react';

import { MiniMessagesContext } from '@feat-primary-header-contexts/mini-messages';

import { ProfessionalInformation } from '@feat-primary-header-molecules/professional-information';
import { ChessboardNav } from '@feat-primary-header-organisms/chessboard-nav';

import { CharacterSpeech } from '@shared-molecules/character-speech';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V1 } from '@shared-atoms/pixel-art/variants';

import './style.css';


function HeaderContent() {
    const { miniMessages } = useContext(MiniMessagesContext);

    const characterSpeech = {
        messages: miniMessages,
        character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V1
    };


    return (
        <div className='header-content'>
            <section className='header-content__section'>
                <ProfessionalInformation />
                <ProfessionalContact />
                <div className='header-content__section--div'>
                    <CharacterSpeech {...characterSpeech} />
                </div>
            </section>
            <nav>
                <ChessboardNav />
            </nav>
        </div>
    );
}

export { HeaderContent };
