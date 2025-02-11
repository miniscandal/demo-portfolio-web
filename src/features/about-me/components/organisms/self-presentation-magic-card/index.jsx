import { useContext } from 'react';

import { MiniGameContext } from '@feat-about-me-contexts/mini-game';

import { PhotoEnigma } from '@feat-about-me-molecules/photo-enigma';
import { HorizontalPoster } from '@feat-about-me-molecules/horizontal-poster';
import { VerticalPoster } from '@feat-about-me-molecules/vertical-poster';
import { BackgroundGridOverlay } from '@feat-about-me-molecules/background-grid-overlay';

import './style.css';


function SelfPresentationMagicCard() {
    const { gameState: { endGame } } = useContext(MiniGameContext);


    return (
        <div className='self-presentation-magic-card'>
            <HorizontalPoster textMain='SOFTWARE' textSecondary='DEVELOPER' />
            <div className='self-presentation-magic-card__div'>
                <VerticalPoster text='MINI-CODE' />
                <PhotoEnigma hidden={!endGame} />
                <BackgroundGridOverlay />
            </div>
        </div>
    );
}

export { SelfPresentationMagicCard };
