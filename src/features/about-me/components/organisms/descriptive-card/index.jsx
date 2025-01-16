import { useContext } from 'react';

import { MiniGameContext } from '@feat-about-me-contexts/mini-game';

import { HorizontalPoster } from '@feat-about-me-molecules/horizontal-poster';
import { VerticalPoster } from '@feat-about-me-molecules/vertical-poster';
import { PhotoEnigma } from '@feat-about-me-molecules/photo-enigma';
import { GridOverlay } from '@feat-about-me-molecules/grid-overlay';

import './style.css';


function DescriptiveCard() {
    const { stateGame } = useContext(MiniGameContext);
    console.log('card', stateGame);

    const horizontalPoster = {
        firstWord: 'SOFTWARE',
        secondWord: 'DEVELOPER'
    };
    const verticalPoster = {
        text: 'MINI-CODE'
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
                    <PhotoEnigma />
                </div>
                <div className='descriptive-card__div--background'>
                    <GridOverlay />
                </div>
            </section>
        </section>
    );
}

export { DescriptiveCard };
