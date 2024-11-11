import { ChessboardNav } from '@feat-home-primary-header-organisms/chessboard-nav';
import { Image } from '@shared-atoms/image';
import { PixelArtCharacterDialog } from '@shared-molecules/pixel-art-character-dialog';
import { ProfessionalContact } from '@shared-organisms/professional-contact';

import srcPhoto from '@assets-images/photo-me/main-3.jpg';

import { PIXEL_ART_ANIME_UMI } from '@shared-constants/pixel-art-characters';

import './style.css';


function PrimaryHeader() {
    const image = {
        src: srcPhoto,
        size: 'default',
        objectFit: 'cover'
    };
    const pixelArtCharacterDialog = {
        text: 'Hello World!',
        character: PIXEL_ART_ANIME_UMI
    };

    return (
        <header className='primary-header'>
            <Image {...image} />
            <div className='primary-header-navigation__div'>
                <PixelArtCharacterDialog {...pixelArtCharacterDialog} />
                <ProfessionalContact />
            </div>
            <ChessboardNav />
        </header>
    );
}

export { PrimaryHeader };
