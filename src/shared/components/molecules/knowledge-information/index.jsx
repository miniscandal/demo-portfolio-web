import { PixelArt } from '@shared-atoms/pixel-art';
import { Paragraph } from '@shared-atoms/paragraph';

import { PIXEL_ART_ITEM_BOOKS } from '@shared-atoms/pixel-art/variants';

import './style.css';


function KnowledgeInformation({
    name: text = 'Knowledge Information',
    color: bgColor = 'lightpink',
}) {
    const pixelArtBook = {
        size: 'small',
        character: PIXEL_ART_ITEM_BOOKS
    };
    const paragraph = {
        text
    };

    return (
        <div className='knowledge-information' style={{ backgroundColor: bgColor }}>
            <Paragraph {...paragraph} />
            <div>
                <PixelArt {...pixelArtBook} />
            </div>
        </div>
    );
}

export { KnowledgeInformation };
