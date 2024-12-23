import { GridOverlay } from '@feat-about-me-molecules/grid-overlay';

import { TextPoster } from '@feat-about-me-molecules/text-poster';
import { Image } from '@shared-atoms/image';

import photo from '@assets-images/photo-me/my-photo-01.png';

import './style.css';


function DescriptiveCard() {
    const image = {
        src: photo,
        size: 'my-photo'
    };
    const textPoster = {
        text: 'MINI-CODE',
        writingVertical: true
    };

    return (
        <section className='descriptive-card'>
            <div className='descriptive-card__div--content'>
                <div className='descriptive-card__div--text-poster'>
                    <TextPoster {...textPoster} />
                </div>
                <div className='descriptive-card__div--image'>
                    <Image {...image} />
                </div>
            </div>
            <div className='descriptive-card__div--background'>
                <GridOverlay />
            </div>
        </section>
    );
}

export { DescriptiveCard };
