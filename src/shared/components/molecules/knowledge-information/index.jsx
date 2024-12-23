import { PixelArt } from '@shared-molecules/pixel-art';
import { Paragraph } from '@shared-atoms/paragraph';

import { PIXEL_ART_ITEM_BOOK } from '@shared-molecules/pixel-art/variants';

import './style.css';


function KnowledgeInformation({
    name: text = 'Knowledge Information',
    color: bgColor = 'lightpink',
}) {
    const pixelArtBook = {
        size: 'small',
        character: PIXEL_ART_ITEM_BOOK
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
