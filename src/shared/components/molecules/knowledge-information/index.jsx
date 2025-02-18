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

    return (
        <div className='knowledge-information' style={styles}>
            <Paragraph text={text} nowrap={true} />
            <div className='knowledge-information__div'>
                <PixelArt size='small' character={PIXEL_ART_ITEM_BOOKS} />
            </div>
        </div>
    );
}

export { KnowledgeInformation };
