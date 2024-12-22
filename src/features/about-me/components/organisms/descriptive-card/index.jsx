import { GridOverlay } from '@feat-about-me-molecules/grid-overlay';

import { Sing } from '@feat-about-me-molecules/sing';
import { Image } from '@shared-atoms/image';

import photo from '@assets-images/photo-me/my-photo-01.png';

import './style.css';


function DescriptiveCard() {
    const image = {
        src: photo,
        size: 'my-photo'
    };
    const singOne = {
        text: 'MINI-CODE',
        writingVertical: true
    };
    const singTwo = {
        text: 'SOFTWARE DEVELOPER'
    };

    return (
        <section className='descriptive-card'>
            <div className='descriptive-card__div--content'>
                <div className='descriptive-card__div--sing'>
                    <Sing {...singOne} />
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
