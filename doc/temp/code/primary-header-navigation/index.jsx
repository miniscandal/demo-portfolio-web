import { Image } from '@shared-atoms/image';
import { ChessboardNav } from '@feat-home-molecules/chessboard-nav';
import { ProfessionalContact } from '@shared-organisms/professional-contact';
import { PixelArtCharacterDialog } from '@feat-home-molecules/pixel-art-character-dialog';

import srcPhoto from '@assets-images/solid/me-coding.webp';

import './style.css';


function PrimaryHeaderNavigation() {
    const image = {
        src: srcPhoto,
        size: 'default',
        objectFit: 'cover'
    };

    return (
        <section className='primary-header-navigation'>
            <Image {...image} />
            <div className='primary-header-navigation__div'>
                <PixelArtCharacterDialog />
                <ProfessionalContact />
            </div>
            <ChessboardNav />
        </section>
    );
}

export { PrimaryHeaderNavigation };
