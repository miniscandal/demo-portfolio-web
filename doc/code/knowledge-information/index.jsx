import { PixelArt } from '@shared-molecules/pixel-art';
import { Paragraph } from '@shared-atoms/paragraph';

import { PIXEL_ART_ITEM_BOOK } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ITEM_BOOKS } from '@shared-molecules/pixel-art/variants';

import './style.css';


function KnowledgeInformation({
    name: text = 'Knowledge Information',
    color: bgColor = 'lightpink',
}) {
    const pixelArtBooks = {
        size: 'small',
        character: PIXEL_ART_ITEM_BOOKS
    };
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
            <PixelArt {...pixelArtBook} />
        </div>
    );
}

export { KnowledgeInformation };
