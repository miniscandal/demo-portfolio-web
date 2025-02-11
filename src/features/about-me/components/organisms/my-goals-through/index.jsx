import { Title } from '@shared-atoms/title';

import { PanelControlSliderProvider } from '@feat-about-me-contexts/panel-control-slider';

import { SliderDialog } from '@feat-about-me-organisms/slider-pixel-art-dialog';
import { PixelArtSceneMyGoals } from '@feat-about-me-molecules/pixel-art-scene-my-goals';

import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_DOMO } from '@shared-atoms/pixel-art/variants';

import './style.css';


function MyGoalsThrough({
    title = 'My Goals Thorough',
    character,
    type = 'primary-scene',
    texts,
    Provider,
    children = <PixelArt character={PIXEL_ART_ITEM_DOMO} />
}) {
    const classList = [
        type
    ];


    return (
        <article className={`my-goals-through ${classList.join(' ')}`}>
            <Title text={title} type='h3' color='vintage-rose' />
            <PanelControlSliderProvider Provider={Provider}>
                <SliderDialog texts={texts} />
            </PanelControlSliderProvider>
            <PixelArtSceneMyGoals character={character} type={type}>
                {children}
            </PixelArtSceneMyGoals>
        </article>
    );
}

export { MyGoalsThrough };
