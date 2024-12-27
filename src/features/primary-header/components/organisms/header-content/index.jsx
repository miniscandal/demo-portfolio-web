import { ChessboardNav } from '@feat-primary-header-organisms/chessboard-nav';

import { ProfessionalInformationProvider } from '@feat-primary-header-contexts/professional-information';

import { ProfessionalContactProvider } from '@shared-contexts/professional-contact';

import { CharacterSpeech } from '@shared-molecules/character-speech';
import { ProfessionalInformation } from '@feat-primary-header-organisms/professional-information';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

import { PIXEL_ART_ANIME_UMI } from '@shared-molecules/pixel-art/variants';

import './style.css';


function HeaderContent() {
    const characterSpeech = {
        text: 'Hello World!',
        character: PIXEL_ART_ANIME_UMI
    };


    return (
        <div className='header-content'>
            <nav className='header-content__nav'>
                <ChessboardNav />
            </nav>
            <section className='header-content__section'>
                <ProfessionalInformationProvider>
                    <ProfessionalInformation />
                </ProfessionalInformationProvider>
                <ProfessionalContactProvider>
                    <ProfessionalContact />
                </ProfessionalContactProvider>
                <CharacterSpeech {...characterSpeech} />
            </section>
        </div>
    );
}

export { HeaderContent };
