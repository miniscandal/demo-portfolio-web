import { Title } from '@shared-atoms/title';

import { SliderDialog } from '@feat-about-me-molecules/slider-pixel-art-dialog';
import { PixelArtSceneMyGoals } from '@feat-about-me-molecules/pixel-art-scene-my-goals';

import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_DOMO } from '@shared-atoms/pixel-art/variants';

import './style.css';


function MyGoalsThrough({
    title = 'My Goals Thorough',
    dialogTexts = ['Social Goals', 'Personal Goals'],
    character,
    pixelArtItems = () => <PixelArt character={PIXEL_ART_ITEM_DOMO} />,
    type
}) {
    const classList = [
        type
    ];


    return (
        <section className={`my-goals-through ${classList.join(' ')}`}>
            <div className='my-goals-through__div'>
                <Title text={title} type='h3' color='dark' />
            </div>
            <section className='my-goals-through__section'>
                <div className='my-goals-through__section--dialog'>
                    <SliderDialog textMain={dialogTexts[0]} textSecondary={dialogTexts[1]} />
                </div>
                <PixelArtSceneMyGoals character={character} type={type}>
                    {pixelArtItems()}
                </PixelArtSceneMyGoals>
            </section>
        </section>
    );
}

export { MyGoalsThrough };
