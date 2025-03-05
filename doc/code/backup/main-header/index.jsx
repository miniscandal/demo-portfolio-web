import { useContext, useRef } from 'react';

import { useIntersectionObserver } from '@shared-custom-hooks/use-intersection-observer';

import { MiniMessagesContext } from '@feat-main-header-contexts/mini-messages';

import { HeaderProfileData } from '@feat-main-header-organisms/header-profile-data';
import { ActionPanel } from '@feat-main-header-organisms/action-panel';
import { ChessboardNav } from '@feat-main-header-organisms/chessboard-nav';

import { Picture } from '@shared-atoms/picture';

import backgroundImage from '@assets-images/my-photos/setup/03.jpg';

import { VARIANT_ACTIVITY_BAR_CHESSBOARD_NAV } from '@feat-main-header-organisms/chessboard-nav/types';

import './style.css';


function MainHeader() {
    const headerRef = useRef(null);
    const navRef = useRef(null);
    const { miniMessages } = useContext(MiniMessagesContext);
    const hasIntersected = useIntersectionObserver({
        ref: headerRef,
        options: {
            threshold: 0,
            rootMargin: '-50px'
        }
    });

    const variantClass = hasIntersected ? '' : VARIANT_ACTIVITY_BAR_CHESSBOARD_NAV;


    return (
        <header ref={headerRef} className='main-header'>
            <div className='main-header__bg'>
                <Picture src={backgroundImage} size='adaptive' objectFit='cover' />
            </div>
            <HeaderProfileData miniMessages={miniMessages} />
            <div className={`main-header__control-panel ${variantClass}`}>
                <ActionPanel navRef={navRef} type={hasIntersected ? '' : VARIANT_ACTIVITY_BAR_CHESSBOARD_NAV} />
                <ChessboardNav ref={navRef} type={hasIntersected ? '' : VARIANT_ACTIVITY_BAR_CHESSBOARD_NAV} />
            </div>
        </header>
    );
}

export { MainHeader };
