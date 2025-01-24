import { useContext } from 'react';

import { MiniGameContext } from '@feat-about-me-contexts/mini-game';

import { HorizontalPoster } from '@feat-about-me-molecules/horizontal-poster';
import { VerticalPoster } from '@feat-about-me-molecules/vertical-poster';
import { PhotoEnigma } from '@feat-about-me-organisms/photo-enigma';
import { GridOverlay } from '@feat-about-me-molecules/grid-overlay';

import './style.css';


function DescriptiveCard() {
    const { gameState: { endGame } } = useContext(MiniGameContext);

    const horizontalPoster = {
        firstWord: 'SOFTWARE',
        secondWord: 'DEVELOPER'
    };
    const verticalPoster = {
        text: 'MINI-CODE'
    };
    const photoEnigma = {
        hidden: !endGame
    };


    return (
        <section className='descriptive-card'>
            <header>
                <HorizontalPoster {...horizontalPoster} />
            </header>
            <section className='descriptive-card__section'>
                <div className='descriptive-card__div--poster'>
                    <VerticalPoster {...verticalPoster} />
                </div>
                <div className='descriptive-card__div--photo'>
                    <PhotoEnigma {...photoEnigma} />
                </div>
                <div className='descriptive-card__div--background'>
                    <GridOverlay />
                </div>
            </section>
        </section>
    );
}

export { DescriptiveCard };
