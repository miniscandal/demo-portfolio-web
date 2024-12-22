import { GridOverlay } from '@feat-about-me-molecules/grid-overlay';

import { Title } from '@shared-atoms/title';
import { Image } from '@shared-atoms/image';

import photo from '@assets-images/photo-me/my-photo-01.png';

import './style.css';


function AboutMe() {
    const titleH2 = {
        text: 'ABOUT ME',
        type: 'h2',
        decorated: true
    };
    const image = {
        src: photo,
        size: 'my-photo'
    };

    return (
        <article className='about-me'>
            <Title {...titleH2} />
            <section>
                <section className='descriptive-card'>
                    <div className='descriptive-card__div--data'>
                        <div className='descriptive-card__div--title'>
                            <h3>
                                MINI-CODE
                            </h3>
                        </div>
                        <div className='descriptive-card__div--image'>
                            <Image {...image} />
                        </div>
                    </div>

                    <div className='descriptive-card__div--grid'>
                        <GridOverlay />
                    </div>
                </section>
            </section>
        </article>
    );
}

export { AboutMe };
