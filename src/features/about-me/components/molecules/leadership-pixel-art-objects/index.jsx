import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_STICKY_NOTE_GROUP } from '@shared-atoms/pixel-art/variants';

import './style.css';


function LeadershipPixelArtObjects({
    character,
    objects = [() => <PixelArt character={PIXEL_ART_ITEM_STICKY_NOTE_GROUP} />],
    type = 'rectangular-figure'
}) {
    const classList = [
        type
    ];
    const components = objects.map((value, index) => (
        <div key={`${index}-${value}`} className='leadership-pixel-art-objects__div'>
            {value()}
        </div>
    ));
    const pixelArtCharacter = {
        character
    };

    return (
        <div className={`leadership-pixel-art-objects ${classList.join(' ')}`}>
            <div className='leadership-pixel-art-objects__div'>
                <PixelArt {...pixelArtCharacter} />
            </div>
            {components}
        </div>
    );
}

export { LeadershipPixelArtObjects };
