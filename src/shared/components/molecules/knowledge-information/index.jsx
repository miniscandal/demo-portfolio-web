import { PixelArt } from '@shared-molecules/pixel-art';

import { PIXEL_ART_HAMTARO } from '@shared-molecules/pixel-art/variants';

import './style.css';


function KnowledgeInformation({
    name: text = 'Knowledge Information',
    color: bgColor = 'lightpink',
}) {
    const pixelArt = {
        size: 'small',
        character: PIXEL_ART_HAMTARO,
        showContainer: false
    };

    return (
        <a className='knowledge-information' style={{ backgroundColor: bgColor }}>
            {text}
            <div>
                <PixelArt {...pixelArt} />
            </div>
        </a>
    );
}

export { KnowledgeInformation };
