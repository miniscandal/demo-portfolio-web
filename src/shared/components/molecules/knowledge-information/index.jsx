import { PixelArt } from '@shared-atoms/pixel-art';
import { Paragraph } from '@shared-atoms/paragraph';

import { PIXEL_ART_ITEM_BOOKS } from '@shared-atoms/pixel-art/variants';

import './style.css';


function KnowledgeInformation({
    name: text = 'Knowledge Information',
    color: bgColor = 'lightpink',
}) {
    const styles = {
        backgroundColor: bgColor
    };
    const pixelArt = {
        size: 'small',
        character: PIXEL_ART_ITEM_BOOKS
    };
    const paragraph = {
        text,
        nowrap: true
    };

    return (
        <div className='knowledge-information' style={styles}>
            <Paragraph {...paragraph} />
            <div className='knowledge-information__div'>
                <PixelArt {...pixelArt} />
            </div>
        </div>
    );
}

export { KnowledgeInformation };
