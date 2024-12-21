import { ChessboardNav } from '@feat-primary-header-organisms/chessboard-nav';

import { ProfessionalInformationProvider } from '@shared-contexts/professional-information';
import { ProfessionalContactProvider } from '@shared-contexts/professional-contact';

import { Image } from '@shared-atoms/image';
import { CharacterSpeech } from '@shared-molecules/character-speech';
import { ProfessionalInformation } from '@shared-organisms/professional-information';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

import { PIXEL_ART_ANIME_UMI } from '@shared-molecules/pixel-art/variants';

import srcPhoto from '@assets-images/photo-me/main-3.jpg';

import './style.css';


function PrimaryHeader() {
    const image = {
        src: srcPhoto,
        size: 'adaptive',
        objectFit: 'cover'
    };
    const characterSpeech = {
        text: 'Hello World!',
        character: PIXEL_ART_ANIME_UMI
    };

    return (
        <header className='primary-header'>
            <div className='primary-header__div--image'>
                <Image {...image} />
            </div>
            <div className='primary-header__div--professional-data'>
                <CharacterSpeech {...characterSpeech} />
                <ProfessionalInformationProvider>
                    <ProfessionalInformation />
                </ProfessionalInformationProvider>
                <ProfessionalContactProvider>
                    <ProfessionalContact />
                </ProfessionalContactProvider>
            </div>
            <div className='primary-header__div--nav'>
                <ChessboardNav />
            </div>
        </header>
    );
}

export { PrimaryHeader };
