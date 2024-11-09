import { ChessboardNav } from '@feat-home-primary-header-organisms/chessboard-nav';
import { Image } from '@shared-atoms/image';
import { PixelArtCharacterDialog } from '@shared-molecules/pixel-art-character-dialog';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

import srcPhoto from '@assets-images/photo-me/main-3.jpg';

import './style.css';


function PrimaryHeader() {
    const image = {
        src: srcPhoto,
        size: 'default',
        objectFit: 'cover'
    };

    return (
        <header className='primary-header'>
            <Image {...image} />
            <div className='primary-header-navigation__div'>
                <PixelArtCharacterDialog />
                <ProfessionalContact />
            </div>
            <ChessboardNav />
        </header>
    );
}

export { PrimaryHeader };
