import { ChessboardNav } from '@feat-home-primary-header-organisms/chessboard-nav';
import { Image } from '@shared-atoms/image';
import { CharacterSpeech } from '@shared-molecules/character-speech';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

import './style.css';


function PrimaryHeader({
    image,
    characterSpeech
}) {

    return (
        <header className='primary-header'>
            <Image {...image} />
            <div className='primary-header-navigation__div'>
                <CharacterSpeech {...characterSpeech} />
                <ProfessionalContact />
            </div>
            <ChessboardNav />
        </header>
    );
}

export { PrimaryHeader };
