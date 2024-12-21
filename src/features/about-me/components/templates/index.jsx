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
    const titleH3 = {
        text: 'Software Developer',
        type: 'h3'
    };

    return (
        <article className='about-me'>
            <Title {...titleH2} />
            <section>
                <section>
                    <div className='about-me__title'>
                        <h3>
                            MINI-CODE
                        </h3>
                    </div>

                    <div className='about-me__image'>
                        <Image {...image} />
                    </div>
                </section>

                <section>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>

                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>

                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>

                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>

                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>

                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </section>

            </section>
        </article>
    );
}

export { AboutMe };
