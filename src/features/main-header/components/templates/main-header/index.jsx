import { useContext, useEffect, useRef, useState } from 'react';

import { MiniMessagesContext } from '@feat-main-header-contexts/mini-messages';

import { HeaderProfileData } from '@feat-main-header-organisms/header-profile-data';
import { ActionPanel } from '@feat-main-header-organisms/action-panel';

import { Picture } from '@shared-atoms/picture';

import backgroundImg from '@assets-images/my-photos/setup/03.jpg';

import { VARIANT_ACTIVITY_BAR_CHESSBOARD_NAV } from '@feat-main-header-organisms/chessboard-nav/types';

import './style.css';


function MainHeader() {
    const [isVisible, setIsVisible] = useState(true);
    const headerRef = useRef(null);
    const { miniMessages } = useContext(MiniMessagesContext);

    useEffect(() => {
        const currentTarget = headerRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: '-50px'
            }
        );

        observer.observe(currentTarget);

        return () => {
            observer.unobserve(currentTarget);
        };
    }, []);


    return (
        <header ref={headerRef} className='main-header'>
            <div className='main-header__background-image'>
                <Picture src={backgroundImg} size='adaptive' objectFit='cover' />
            </div>
            <HeaderProfileData miniMessages={miniMessages} />
            <ActionPanel type={isVisible ? '' : VARIANT_ACTIVITY_BAR_CHESSBOARD_NAV} />
        </header>
    );
}

export { MainHeader };
