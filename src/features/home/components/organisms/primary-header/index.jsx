import { PersonalInformation } from '@shared-organisms/personal-information';
import { ChessboardNav } from '../chessboard-nav';
import { Image } from '@shared-atoms/image';
import { Paragraph } from '@shared-atoms/paragraph';
import { GroupStars } from '@feat-home-molecules/group-stars';

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

    return (
        <header className='primary-header'>
            <Image {...image} />
            <ChessboardNav />
            <div className='primary-header__div'>
                <Paragraph {...paragraph} />
                <PersonalInformation />
            </div>
        </header>
    );
}

export { PrimaryHeader };
