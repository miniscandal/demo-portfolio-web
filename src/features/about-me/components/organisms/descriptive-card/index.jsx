import { GridOverlay } from '@feat-about-me-molecules/grid-overlay';
import { VerticalPoster } from '@feat-about-me-molecules/vertical-poster';
import { HorizontalPoster } from '@feat-about-me-molecules/horizontal-poster';

import { Image } from '@shared-atoms/image';

import photo from '@assets-images/photo-me/my-photo-03.png';

import './style.css';


function DescriptiveCard() {
    const image = {
        src: photo,
        size: 'my-photo'
    };
    const verticalPoster = {
        text: 'MINI-CODE'
    };
    const horizontalPoster = {
        firstWord: 'SOFTWARE',
        secondWord: 'DEVELOPER'
    };

    return (
        <section className='descriptive-card'>
            <header>
                <HorizontalPoster {...horizontalPoster} />
            </header>
            <section className='descriptive-card__section'>
                <div className='descriptive-card__div--content'>
                    <div className='descriptive-card__div--vertical-poster'>
                        <VerticalPoster {...verticalPoster} />
                    </div>
                    <div className='descriptive-card__div--image'>
                        <Image {...image} />
                    </div>
                </div>
                <div className='descriptive-card__div--background'>
                    <GridOverlay />
                </div>
            </section>
        </section>
    );
}

export { DescriptiveCard };
