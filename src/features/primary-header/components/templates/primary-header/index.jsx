import { useContext } from 'react';

import { MiniMessagesContext } from '@feat-primary-header-contexts/mini-messages';

import { ChessboardNav } from '@feat-primary-header-organisms/chessboard-nav';
import { HeaderProfileData } from '@feat-primary-header-organisms/header-profile-data';

import { Picture } from '@shared-atoms/picture';

import backgroundImg from '@assets-images/my-photos/setup/03.jpg';

import './style.css';


function PrimaryHeader() {
    const { miniMessages } = useContext(MiniMessagesContext);

    return (
        <header className='primary-header'>
            <div className='primary-header__background-image'>
                <Picture src={backgroundImg} size='adaptive' objectFit='cover' />
            </div>
            <HeaderProfileData miniMessages={miniMessages} />
            <ChessboardNav />
        </header>
    );
}

export { PrimaryHeader };
