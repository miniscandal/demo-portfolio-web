import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V3 } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_STICKY_NOTE_GROUP } from '@shared-atoms/pixel-art/variants';

import './style.css';


function PixelArtSceneMyGoals({
    character = PIXEL_ART_ANIME_MINICODE_ANIMATION_V3,
    type = 'primary-scene',
    children = <PixelArt character={PIXEL_ART_ITEM_STICKY_NOTE_GROUP} />
}) {
    const classList = [
        type
    ];


    return (
        <div className={`pixel-art-scene-my-goals ${classList.join(' ')}`}>
            <div className='pixel-art-scene-my-goals__div'>
                <PixelArt character={character} />
                {children}
            </div>
        </div>
    );
}

export { PixelArtSceneMyGoals };
