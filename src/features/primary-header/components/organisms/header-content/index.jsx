import { ProfessionalInformationProvider } from '@feat-primary-header-contexts/professional-information';
import { ProfessionalContactProvider } from '@shared-contexts/professional-contact';

import { ProfessionalInformation } from '@feat-primary-header-molecules/professional-information';
import { ChessboardNav } from '@feat-primary-header-organisms/chessboard-nav';

import { CharacterSpeech } from '@shared-molecules/character-speech';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V3 } from '@shared-atoms/pixel-art/variants';

import './style.css';


function HeaderContent() {
    const characterSpeech = {
        text: 'Hello World!',
        character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V3
    };


    return (
        <div className='header-content'>
            <section className='header-content__section'>
                <ProfessionalInformationProvider>
                    <ProfessionalInformation />
                </ProfessionalInformationProvider>
                <ProfessionalContactProvider>
                    <ProfessionalContact />
                </ProfessionalContactProvider>
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
