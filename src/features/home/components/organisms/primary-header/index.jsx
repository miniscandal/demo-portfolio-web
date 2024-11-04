import { PersonalInformation } from '@shared-organisms/personal-information';
import { ChessboardNav } from '../chessboard-nav';
import { Image } from '@shared-atoms/image';
import { Paragraph } from '@shared-atoms/paragraph';
import { PixelArtCharacter } from '@shared-molecules/pixel-art-character';

import { PIXEL_ART_ANIME_UMI } from '@shared-constants/pixel-art-characters';

import srcPhoto from '@assets-images/solid/me-coding.webp';

import './style.css';


function PrimaryHeader() {
    const image = {
        src: srcPhoto,
        size: 'auto',
        objectFit: 'cover'
    };
    const paragraph = {
        text: 'Hello World!',
        cursorAnimation: true
    };
    const pixelArtCharacter = {
        character: PIXEL_ART_ANIME_UMI,
        size: 'large',
        showContainer: false
    }

    return (
        <header className='primary-header'>
            <Image {...image} />
            <ChessboardNav />
            <div className='primary-header__div'>
                <div>
                    <PixelArtCharacter {...pixelArtCharacter} />
                </div>
                <Paragraph {...paragraph} />
                <PersonalInformation />
            </div>
        </header>
    );
}

export { PrimaryHeader };
